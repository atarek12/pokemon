import { Box, Button, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { BsLightningChargeFill } from "react-icons/bs";
import {
  PaginationModeEnum,
  usePaginationModeStore,
} from "~/context/pagination-mode-context";
import { usePagination } from "~/hooks/usePagination";

interface AppHeaderProps {}

export const AppHeader: React.FC<AppHeaderProps> = () => {
  const { paginationMode, togglePaginationMode } = usePaginationModeStore();
  const { setPage } = usePagination();

  const togglePagination = () => {
    togglePaginationMode();
    setPage(1);
  };

  return (
    <Box as="header" p="40px">
      <VStack spaceY="16px">
        <Heading as="h1" fontSize="2xl">
          <HStack>
            <BsLightningChargeFill />
            Pokédex
          </HStack>
        </Heading>

        <Text>Discover and explore Pokemon with {paginationMode}</Text>

        <HStack>
          <Button
            variant={
              paginationMode === PaginationModeEnum.controls
                ? "solid"
                : "outline"
            }
            onClick={togglePagination}
          >
            Page Controls
          </Button>
          <Button
            variant={
              paginationMode === PaginationModeEnum.infinite
                ? "solid"
                : "outline"
            }
            onClick={togglePagination}
          >
            Infinite Scroll
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
};
