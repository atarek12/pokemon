import React from "react";
import { PokemonList } from "./PokemonList";
import { Stack } from "@chakra-ui/react";
import { PaginationButtons } from "./PaginationButtons";
import { useGetPokemonList } from "~/api/pokemon";
import { usePagination } from "~/hooks/usePagination";
import { PokemonListSkeleton } from "./PokemonListSkeleton";
import { FetchError } from "./FetchError";

interface PageControlsProps {}

export const PageControls: React.FC<PageControlsProps> = ({}) => {
  const { limit, offset, page } = usePagination();
  const { data, isLoading, error, refetch } = useGetPokemonList({
    limit,
    offset,
  });

  if (isLoading) {
    return <PokemonListSkeleton />;
  }

  if (!data || error) {
    return <FetchError error={error} onRetry={refetch} />;
  }

  return (
    <Stack spaceY="20px" pb="60px">
      <PokemonList pokemons={data.results} />
      <PaginationButtons totalCount={data.count} currentPage={page} />
    </Stack>
  );
};
