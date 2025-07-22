export interface IPaginatedResponse {
  count: number;
  next: string;
  previous: string;
}

export interface IPokemonListItem {
  name: string;
  url: string;
}

interface INamedAPIResource {
  name: string;
  url: string;
}

interface IAbility {
  ability: INamedAPIResource | null;
  is_hidden: boolean;
  slot: number;
}

interface ICry {
  latest: string;
  legacy: string;
}

interface IGameIndex {
  game_index: number;
  version: INamedAPIResource;
}

interface IMoveLearnMethod {
  level_learned_at: number;
  move_learn_method: INamedAPIResource;
  order: number | null;
  version_group: INamedAPIResource;
}

interface Move {
  move: INamedAPIResource;
  version_group_details: IMoveLearnMethod[];
}

interface ISpriteSet {
  back_default: string | null;
  back_female?: string | null;
  back_shiny?: string | null;
  back_shiny_female?: string | null;
  front_default: string | null;
  front_female?: string | null;
  front_shiny?: string | null;
  front_shiny_female?: string | null;
}

interface OtherSprites {
  dream_world: ISpriteSet;
  home: ISpriteSet;
  "official-artwork": Pick<ISpriteSet, "front_default" | "front_shiny">;
  showdown: ISpriteSet;
}

interface IVersionSprites {
  [version: string]: Partial<ISpriteSet> | { animated?: ISpriteSet };
}

interface IVersionGroupSprites {
  [generation: string]: IVersionSprites;
}

interface ISprites {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
  other: OtherSprites;
  versions: IVersionGroupSprites;
}

interface IStat {
  base_stat: number;
  effort: number;
  stat: INamedAPIResource;
}

interface IType {
  slot: number;
  type: INamedAPIResource;
}

interface IPastAbility {
  abilities: IAbility[];
  generation: INamedAPIResource;
}

export interface IPokemonInfo {
  abilities: IAbility[];
  base_experience: number;
  cries: ICry;
  forms: INamedAPIResource[];
  game_indices: IGameIndex[];
  height: number;
  held_items: unknown[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Move[];
  name: string;
  order: number;
  past_abilities: IPastAbility[];
  past_types: unknown[];
  species: INamedAPIResource;
  sprites: ISprites;
  stats: IStat[];
  types: IType[];
  weight: number;
}
