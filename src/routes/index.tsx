import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import {
  PaginationModeEnum,
  usePaginationModeStore,
} from "~/context/pagination-mode-context";
import { InfiniteScroll } from "~/components/InfiniteScroll";
import { PageControls } from "~/components/PageControls";
import { Box } from "@chakra-ui/react";
import { AppHeader } from "~/components/AppHeader";

const productSearchSchema = z.object({
  page: z.number().min(1).max(66).catch(1),
});

export const Route = createFileRoute("/")({
  component: RouteComponent,
  validateSearch: productSearchSchema,
});

function RouteComponent() {
  const { paginationMode } = usePaginationModeStore();

  return (
    <Box>
      <AppHeader />
      {paginationMode === PaginationModeEnum.infinite ? (
        <InfiniteScroll />
      ) : (
        <PageControls />
      )}
    </Box>
  );
}
