import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import {
  PaginationModeEnum,
  usePaginationModeStore,
} from "~/context/pagination-mode-context";
import { InfiniteScroll } from "~/components/InfiniteScroll";
import { PageControls } from "~/components/PageControls";

const productSearchSchema = z.object({
  page: z.number().catch(1),
});

export const Route = createFileRoute("/")({
  component: RouteComponent,
  validateSearch: productSearchSchema,
});

function RouteComponent() {
  const { paginationMode } = usePaginationModeStore();

  if (paginationMode === PaginationModeEnum.infinite) {
    return <InfiniteScroll />;
  }

  return <PageControls />;
}
