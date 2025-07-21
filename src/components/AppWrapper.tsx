import React, { useState, type ReactNode } from "react";
import { AppHeader, type PaginationModeType } from "./AppHeader";
import { Box } from "@chakra-ui/react";

interface AppWrapperProps {
  children: ReactNode;
}

export const AppWrapper: React.FC<AppWrapperProps> = ({ children }) => {
  const [mode, setMode] = useState<PaginationModeType>("controls");

  const toggleMode = () => {
    setMode((prev) => (prev === "controls" ? "infinite" : "controls"));
  };

  return (
    <Box minHeight="100vh" bg={mode === "controls" ? "blue.50" : "green.50"}>
      <AppHeader toggleMode={toggleMode} mode={mode} />
      <Box maxW="1200px" mx="auto" px="16px">
        {children}
      </Box>
    </Box>
  );
};
