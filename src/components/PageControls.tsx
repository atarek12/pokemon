import React from "react";
import { PokemonList } from "./PokemonList";
import { Stack } from "@chakra-ui/react";
import { PaginationButtons } from "./PaginationButtons";
import { useGetPokemonList } from "~/api/pokemon";
import { usePagination } from "~/hooks/usePagination";
import { PokemonListSkeleton } from "./PokemonListSkeleton";

interface PageControlsProps {}

export const PageControls: React.FC<PageControlsProps> = ({}) => {
  const { limit, offset, page } = usePagination();
  const { data, isLoading, isError } = useGetPokemonList({ limit, offset });

  if (isLoading) {
    return <PokemonListSkeleton />;
  }

  if (!data || isError) {
    return "No Data";
  }

  return (
    <Stack spaceY="20px" pb="60px">
      <PokemonList pokemons={data.results} />
      <PaginationButtons totalCount={data.count} currentPage={page} />;
    </Stack>
  );
};
