import { Card, Grid, Image } from "@chakra-ui/react";
import { Link } from "@tanstack/react-router";
import React from "react";
import type { IPokemonListItem } from "~/api/types";

interface PokemonListProps {
  pokemons: IPokemonListItem[];
}

export const PokemonList: React.FC<PokemonListProps> = ({ pokemons }) => {
  return (
    <Grid templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap="16px">
      {pokemons.map((pokemon) => {
        const id = pokemon.url.split("/").at(-2)!;
        return (
          <Card.Root
            key={id}
            overflow="hidden"
            _hover={{ bg: "gray.50" }}
            asChild
          >
            <Link to="/pokemon/$pokemonId" params={{ pokemonId: id }}>
              <Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
              />
              <Card.Body alignItems="center">
                <Card.Title>{pokemon.name}</Card.Title>
                <Card.Description>#{id}</Card.Description>
              </Card.Body>
            </Link>
          </Card.Root>
        );
      })}
    </Grid>
  );
};
