import React, { type ReactNode } from "react";
import { AppHeader } from "./AppHeader";
import { Box } from "@chakra-ui/react";
import {
  PaginationModeEnum,
  usePaginationModeStore,
} from "~/context/pagination-mode-context";

interface AppWrapperProps {
  children: ReactNode;
}

export const AppWrapper: React.FC<AppWrapperProps> = ({ children }) => {
  const { paginationMode } = usePaginationModeStore();

  return (
    <Box
      minHeight="100vh"
      bg={
        paginationMode === PaginationModeEnum.controls ? "blue.50" : "green.50"
      }
    >
      <AppHeader />
      <Box maxW="1200px" mx="auto" px="16px">
        {children}
      </Box>
    </Box>
  );
};
