export interface IPaginatedResponse {
  count: number;
  next: string;
  previous: string;
}

export interface IPokemonListItem {
  name: string;
  url: string;
}
