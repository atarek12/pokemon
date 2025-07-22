import { Stack, Heading, Button, Text, HStack } from "@chakra-ui/react";
import { Link } from "@tanstack/react-router";
import React from "react";

interface FetchErrorProps {
  error: Error | unknown;
  onRetry?: () => void;
}

export const FetchError: React.FC<FetchErrorProps> = ({ error, onRetry }) => {
  return (
    <Stack alignItems="center" justifyContent="center" pt="40px">
      <Heading as="h2" fontSize="3xl">
        Fetching Error
      </Heading>
      <Text>{error instanceof Error ? error.message : String(error)}</Text>

      <HStack>
        <Button variant="outline" asChild>
          <Link to="/" search={{ page: 1 }}>
            Go back to home
          </Link>
        </Button>
        {onRetry && (
          <Button variant="solid" onClick={onRetry}>
            Retry
          </Button>
        )}
      </HStack>
    </Stack>
  );
};
