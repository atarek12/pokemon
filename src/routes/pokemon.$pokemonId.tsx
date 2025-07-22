import { Box, Button } from "@chakra-ui/react";
import {
  createFileRoute,
  useCanGoBack,
  useNavigate,
  useRouter,
} from "@tanstack/react-router";
import { BsArrowLeft } from "react-icons/bs";
import { useGetPokemon } from "~/api/pokemon";
import { FetchError } from "~/components/FetchError";
import { PokemonDetailsCard } from "~/components/PokemonDetailsCard";
import { PokemonDetailsCardSkeleton } from "~/components/PokemonDetailsCardSkeleton";

export const Route = createFileRoute("/pokemon/$pokemonId")({
  component: RouteComponent,
});

function RouteComponent() {
  const { pokemonId } = Route.useParams();
  const router = useRouter();
  const navigate = useNavigate();
  const canGoBack = useCanGoBack();

  const { data, error, isLoading, refetch } = useGetPokemon({ id: pokemonId });

  const handleBack = () => {
    if (canGoBack) {
      router.history.back();
      return;
    }

    navigate({
      to: "/",
      search: { page: 1 },
    });
  };

  if (isLoading) {
    return <PokemonDetailsCardSkeleton />;
  }

  if (!data || error) {
    return <FetchError error={error} onRetry={refetch} />;
  }

  return (
    <Box py="100px">
      <Button variant="surface" mb="40px" onClick={handleBack}>
        <BsArrowLeft />
        Back to list
      </Button>
      <PokemonDetailsCard pokemon={data} />
    </Box>
  );
}
