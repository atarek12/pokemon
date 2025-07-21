import { Card, Grid, Image } from "@chakra-ui/react";
import React from "react";
import { useGetPokemonList } from "~/api/pokemon";

interface PokemonListProps {}

export const PokemonList: React.FC<PokemonListProps> = ({}) => {
  const { data, isLoading } = useGetPokemonList();

  if (isLoading) return "isLoading";

  if (!data) return "No Data";

  return (
    <Grid templateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap="16px">
      {data.results.map((pokemon) => {
        const id = pokemon.url.split("/").at(-2);
        return (
          <Card.Root key={id} overflow="hidden">
            <Image
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
            />
            <Card.Body alignItems="center">
              <Card.Title>{pokemon.name}</Card.Title>
              <Card.Description>#{id}</Card.Description>
            </Card.Body>
          </Card.Root>
        );
      })}
    </Grid>
  );
};
