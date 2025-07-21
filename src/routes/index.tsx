import { Stack } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import { useGetPokemonList } from "~/api/pokemon";
import { PokemonList } from "~/components/PokemonList";
import { z } from "zod";
import { usePagination } from "~/hooks/usePagination";
import { PaginationBox } from "~/components/PaginationBox";

const productSearchSchema = z.object({
  page: z.number().catch(1),
});

export const Route = createFileRoute("/")({
  component: RouteComponent,
  validateSearch: productSearchSchema,
});

function RouteComponent() {
  const { limit, offset, page } = usePagination();
  const { data, isLoading } = useGetPokemonList({ limit, offset });

  if (isLoading) return "isLoading";

  if (!data) return "No Data";

  return (
    <Stack spaceY="20px" pb="60px">
      <PokemonList pokemons={data.results} />
      <PaginationBox totalCount={data.count} currentPage={page} />
    </Stack>
  );
}
