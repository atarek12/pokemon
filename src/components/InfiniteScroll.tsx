import { Button, HStack, Stack } from "@chakra-ui/react";
import React from "react";
import { PokemonList } from "./PokemonList";
import { useGetPokemonListInfinite } from "~/api/pokemon";

interface InfiniteScrollProps {}

export const InfiniteScroll: React.FC<InfiniteScrollProps> = ({}) => {
  const { data, isError, isFetching, hasNextPage, fetchNextPage } =
    useGetPokemonListInfinite();

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
