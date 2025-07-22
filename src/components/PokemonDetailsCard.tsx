import {
  Badge,
  Box,
  Card,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { CiRuler } from "react-icons/ci";
import { TbWeight } from "react-icons/tb";
import type { IPokemonInfo } from "~/api/types";
import { capitalize } from "~/utils/text";

interface PokemonDetailsCardProps {
  pokemon: IPokemonInfo;
}

export const PokemonDetailsCard: React.FC<PokemonDetailsCardProps> = ({
  pokemon,
}) => {
  return (
    <Card.Root variant="elevated">
      <Card.Header
        borderTopRadius="md"
        bg="linear-gradient(45deg, #770adf, #fa007a)"
        justifyContent="center"
        alignItems="center"
        padding="20px"
      >
        <Card.Title fontSize="32px" color="gray.200">
          {capitalize(pokemon.name)}
        </Card.Title>
        <Text color="gray.200">#{pokemon.id}</Text>
      </Card.Header>
      <Card.Body>
        <VStack>
          <Box
            borderRadius="9999px"
            bg="gray.100"
            display="inline"
            width={200}
            height={200}
          >
            <Image
              src={pokemon.sprites.front_default || undefined}
              alt={pokemon.name}
              width="100%"
              height="auto"
            />
          </Box>

          <HStack wrap="wrap">
            {pokemon.types.map((t, i) => (
              <Badge key={i} variant="solid" size="lg">
                {t.type.name}
              </Badge>
            ))}
          </HStack>

          <HStack wrap="wrap" justifyContent="center">
            <Box borderRadius="6px" bg="gray.100" w="150px" p="10px">
              <VStack>
                <HStack>
                  <CiRuler size="22px" color="gray.600" />
                  <Text fontWeight="semibold" color="gray.600">
                    Height
                  </Text>
                </HStack>

                <Text fontWeight="bold" fontSize="20px">
                  {pokemon.height} m
                </Text>
              </VStack>
            </Box>

            <Box borderRadius="6px" bg="gray.100" w="150px" p="10px">
              <VStack>
                <HStack>
                  <TbWeight size="22px" color="gray.600" />
                  <Text fontWeight="semibold" color="gray.600">
                    Weight
                  </Text>
                </HStack>

                <Text fontWeight="bold" fontSize="20px">
                  {pokemon.weight} kg
                </Text>
              </VStack>
            </Box>
          </HStack>
        </VStack>
      </Card.Body>
    </Card.Root>
  );
};
