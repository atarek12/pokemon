import { Box, Button, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { BsLightningChargeFill } from "react-icons/bs";

const PaginationModeMapper = {
  infinite: "infinite scroll",
  controls: "page controls",
} as const;

export type PaginationModeType = keyof typeof PaginationModeMapper;

interface AppHeaderProps {
  toggleMode: () => void;
  mode: PaginationModeType;
}

export const AppHeader: React.FC<AppHeaderProps> = ({ toggleMode, mode }) => {
  return (
    <Box as="header" p="40px">
      <VStack spaceY="16px">
        <Heading as="h1" fontSize="2xl">
          <HStack>
            <BsLightningChargeFill />
            Pokédex
          </HStack>
        </Heading>

        <Text>
          Discover and explore Pokemon with {PaginationModeMapper[mode]}
        </Text>

        <HStack>
          <Button
            variant={mode === "controls" ? "solid" : "outline"}
            onClick={toggleMode}
          >
            Page Controls
          </Button>
          <Button
            variant={mode === "infinite" ? "solid" : "outline"}
            onClick={toggleMode}
          >
            Infinite Scroll
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
};
