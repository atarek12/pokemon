import { Stack, Heading, Button, Text } from "@chakra-ui/react";
import { Link } from "@tanstack/react-router";
import React from "react";

interface NotFoundPageProps {}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({}) => {
  return (
    <Stack alignItems="center" justifyContent="center" minH="100vh">
      <Heading as="h1" fontSize="3xl">
        Where are you going!
      </Heading>
      <Text>404: page not found</Text>
      <Button variant="outline" asChild>
        <Link to="/" search={{ page: 1 }}>
          Go back to home
        </Link>
      </Button>
    </Stack>
  );
};
