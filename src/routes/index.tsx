import { Box } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import { PokemonList } from "~/components/PokemonList";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Box>
      <PokemonList />
    </Box>
  );
}
