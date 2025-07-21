import { useNavigate, useSearch } from "@tanstack/react-router";

export const DEFAULT_PAGE_SIZE = 20;

export function usePagination() {
  const { page } = useSearch({ from: "/" });
  const navigate = useNavigate({ from: "/" });

  const setPage = (newPage: number) => {
    navigate({
      search: { page: newPage },
    });
  };

  const offset = DEFAULT_PAGE_SIZE * (page - 1);

  return { page, offset, limit: DEFAULT_PAGE_SIZE, setPage };
}
