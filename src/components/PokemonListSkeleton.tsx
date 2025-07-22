import { Grid, Stack, Skeleton, SkeletonText } from "@chakra-ui/react";
import React from "react";

interface PokemonListSkeletonProps {}

export const PokemonListSkeleton: React.FC<PokemonListSkeletonProps> = ({}) => {
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
};
