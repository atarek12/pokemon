import React from "react";
import { Link, type ErrorComponentProps } from "@tanstack/react-router";
import { Button, Heading, Stack, Text } from "@chakra-ui/react";

interface ErrorBoundaryProps extends ErrorComponentProps {}

export const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ error }) => {
  return (
    <Stack alignItems="center" justifyContent="center" minH="100vh">
      <Heading as="h1" fontSize="3xl">
        Application Error
      </Heading>
      <Text>{error instanceof Error ? error.message : String(error)}</Text>
      <Button variant="outline" asChild>
        <Link to="/" search={{ page: 1 }}>
          Go back to home
        </Link>
      </Button>
    </Stack>
  );
};
