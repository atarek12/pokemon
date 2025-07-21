import {
  HStack,
  Button,
  ChakraProvider,
  defaultSystem,
} from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider value={defaultSystem}>
      <HStack>
        <Button>Click me</Button>
        <Button>Click me</Button>
      </HStack>
    </ChakraProvider>
  );
}

export default App;
