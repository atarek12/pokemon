import { Button, HStack, Stack } from "@chakra-ui/react";
import React from "react";
import { PokemonList } from "./PokemonList";
import { useGetPokemonListInfinite } from "~/api/pokemon";
import { PokemonListSkeleton } from "./PokemonListSkeleton";
import { FetchError } from "./FetchError";

interface InfiniteScrollProps {}

export const InfiniteScroll: React.FC<InfiniteScrollProps> = ({}) => {
  const {
    data,
    error,
    refetch,
    isLoading,
    isFetching,
    hasNextPage,
    fetchNextPage,
  } = useGetPokemonListInfinite();

  if (isLoading) {
    return <PokemonListSkeleton />;
  }

  if (!data || error) {
    return <FetchError error={error} onRetry={refetch} />;
  }

  const pokemons = data.pages.flatMap((p) => p.results);

  return (
    <Stack spaceY="20px" pb="60px">
      <PokemonList pokemons={pokemons} />
      <HStack justifyContent="center">
        {hasNextPage && (
          <Button loading={isFetching} onClick={() => fetchNextPage()}>
            Load More Pokemon
          </Button>
        )}
      </HStack>
    </Stack>
  );
};
