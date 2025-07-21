import { Pagination, ButtonGroup, IconButton, HStack } from "@chakra-ui/react";
import { Link } from "@tanstack/react-router";
import React from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

interface PageControlsProps {
  totalCount: number;
  currentPage: number;
}

export const PageControls: React.FC<PageControlsProps> = ({
  totalCount,
  currentPage,
}) => {
  return (
    <Pagination.Root
      count={totalCount}
      pageSize={20}
      defaultPage={1}
      page={currentPage}
      display="flex"
      flexDir="column"
      alignItems="center"
      justifyItems="center"
    >
      <ButtonGroup variant="subtle" size="sm">
        <Pagination.PrevTrigger asChild>
          <IconButton asChild>
            <Link from="/" search={(prev) => ({ page: prev.page - 1 })}>
              <LuChevronLeft />
            </Link>
          </IconButton>
        </Pagination.PrevTrigger>

        <Pagination.Items
          render={(page) => (
            <IconButton
              variant={{ base: "subtle", _selected: "solid" }}
              asChild
            >
              <Link from="/" search={{ page: page.value }}>
                {page.value}
              </Link>
            </IconButton>
          )}
        />

        <Pagination.NextTrigger asChild>
          <IconButton asChild>
            <Link from="/" search={(prev) => ({ page: prev.page + 1 })}>
              <LuChevronRight />
            </Link>
          </IconButton>
        </Pagination.NextTrigger>
      </ButtonGroup>
      <HStack fontSize="14px" color="gray.500">
        Page
        <Pagination.PageText format="compact" />
      </HStack>
    </Pagination.Root>
  );
};
