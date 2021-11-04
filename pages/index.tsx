import type { NextPage } from "next";
import { Container, Heading, Text } from "@chakra-ui/react";
import HomePage from "../layout/HomePage";

const Home: NextPage = () => {
  return (
    <Container
      px={{ base: "12", md: "20" }}
      maxW="container.xl"
      bgColor="gray.100"
      border="1px"
      borderColor="red.500"
    >
      <HomePage />
    </Container>
  );
};

export default Home;
