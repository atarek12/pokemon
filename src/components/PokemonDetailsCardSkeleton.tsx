import {
  Box,
  Card,
  HStack,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  VStack,
} from "@chakra-ui/react";
import React from "react";

interface PokemonDetailsCardSkeletonProps {}

export const PokemonDetailsCardSkeleton: React.FC<
  PokemonDetailsCardSkeletonProps
> = ({}) => {
  return (
    <Box py="100px">
      <Card.Root variant="elevated">
        <Card.Header
          borderTopRadius="md"
          bg="linear-gradient(45deg, #770adf, #fa007a)"
          justifyContent="center"
          alignItems="center"
          padding="20px"
        >
          <VStack>
            <SkeletonText width={200} noOfLines={2} />
          </VStack>
        </Card.Header>

        <Card.Body>
          <VStack>
            <SkeletonCircle width={200} height={200} />
            <HStack>
              <Skeleton width={100} height={50} />
              <Skeleton width={100} height={50} />
            </HStack>
          </VStack>
        </Card.Body>
      </Card.Root>
    </Box>
  );
};
