import React from "react";
import { PageControls } from "./PageControls";
import {
  PaginationModeEnum,
  usePaginationModeStore,
} from "~/context/pagination-mode-context";
import { Button, HStack } from "@chakra-ui/react";
import { DEFAULT_PAGE_SIZE } from "~/hooks/usePagination";

interface PaginationBoxProps {
  totalCount: number;
  currentPage: number;
}

export const PaginationBox: React.FC<PaginationBoxProps> = ({
  currentPage,
  totalCount,
}) => {
  const { paginationMode } = usePaginationModeStore();

  if (paginationMode === PaginationModeEnum.controls) {
    return <PageControls totalCount={totalCount} currentPage={currentPage} />;
  }

  const hasMore = totalCount > DEFAULT_PAGE_SIZE * currentPage;

  return (
    <HStack justifyContent="center">
      <Button disabled={!hasMore}>Load More Pokemon</Button>
    </HStack>
  );
};
