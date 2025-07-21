import { useQuery } from "@tanstack/react-query";
import { baseFetch } from "./baseFetch";
import type { IPaginatedResponse, IPokemonListItem } from "./types";

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
  const { limit = 20, offset = 0 } = params;

  return useQuery<IGetPokemonListResponse>({
    queryKey: ["pokemon-list", limit, offset],
    queryFn: () =>
      baseFetch<IGetPokemonListResponse>(
        `pokemon?limit=${limit}&offset=${offset}`,
      ),
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
