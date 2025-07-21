import {
  useInfiniteQuery,
  useQuery,
  type InfiniteData,
} from "@tanstack/react-query";
import { baseFetch } from "./baseFetch";
import type { IPaginatedResponse, IPokemonListItem } from "./types";
import { DEFAULT_PAGE_SIZE } from "~/hooks/usePagination";

/**
 * Get All Pokemon
 */

export interface IGetPokemonListParams {
  limit?: number;
  offset?: number;
}

export interface IGetPokemonListResponse extends IPaginatedResponse {
  results: IPokemonListItem[];
}

export const useGetPokemonList = (params: IGetPokemonListParams = {}) => {
  const { limit = DEFAULT_PAGE_SIZE, offset = 0 } = params;

  return useQuery<IGetPokemonListResponse>({
    queryKey: ["pokemon-list", limit, offset],
    queryFn: () =>
      baseFetch<IGetPokemonListResponse>(
        `pokemon?limit=${limit}&offset=${offset}`,
      ),
  });
};

export const useGetPokemonListInfinite = () => {
  const limit = DEFAULT_PAGE_SIZE;

  return useInfiniteQuery<
    IGetPokemonListResponse,
    Error,
    InfiniteData<IGetPokemonListResponse>,
    [_key: string],
    number
  >({
    queryKey: ["pokemon-list"],
    queryFn: ({ pageParam }) =>
      baseFetch<IGetPokemonListResponse>(
        `pokemon?limit=${limit}&offset=${pageParam * limit}`,
      ),
    initialPageParam: 0,
    getNextPageParam: (lastPage, _allPages, lastPageParam) => {
      const totalCount = lastPage.count;
      const shownCount = limit * lastPageParam;
      if (shownCount + limit > totalCount) {
        return undefined;
      }
      return lastPageParam + 1;
    },
  });
};

/**
 * Get Single Pokemon
 */

export interface IGetPokemonParams {
  id: number;
}

export interface IGetPokemonResponse {}

export const useGetPokemon = (params: IGetPokemonParams) => {
  const { id } = params;

  return useQuery<IGetPokemonResponse>({
    queryKey: ["pokemon-id", id],
    queryFn: () => baseFetch<IGetPokemonResponse>(`pokemon/${id}`),
  });
};
