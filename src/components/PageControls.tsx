import React from "react";
import { PokemonList } from "./PokemonList";
import { Grid, Skeleton, SkeletonText, Stack } from "@chakra-ui/react";
import { PaginationButtons } from "./PaginationButtons";
import { useGetPokemonList } from "~/api/pokemon";
import { usePagination } from "~/hooks/usePagination";

interface PageControlsProps {}

export const PageControls: React.FC<PageControlsProps> = ({}) => {
  const { limit, offset, page } = usePagination();
  const { data, isLoading, isError } = useGetPokemonList({ limit, offset });

  if (isLoading) {
    return (
      <Grid templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap="16px">
        {Array(8)
          .fill(0)
          .map((_, index) => (
            <Stack key={index} gap="6">
              <Skeleton height="200px" />
              <SkeletonText noOfLines={2} />
            </Stack>
          ))}
      </Grid>
    );
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
