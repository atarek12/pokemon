import { Button, HStack, Stack } from "@chakra-ui/react";
import React from "react";
import { PokemonList } from "./PokemonList";
import { useGetPokemonListInfinite } from "~/api/pokemon";
import { PokemonListSkeleton } from "./PokemonListSkeleton";

interface InfiniteScrollProps {}

export const InfiniteScroll: React.FC<InfiniteScrollProps> = ({}) => {
  const { data, isError, isLoading, isFetching, hasNextPage, fetchNextPage } =
    useGetPokemonListInfinite();

  if (isLoading) {
    return <PokemonListSkeleton />;
  }

  if (!data || isError) return "No Data";

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
