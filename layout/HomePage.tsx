import { VStack, HStack, Flex, SimpleGrid, GridItem } from "@chakra-ui/react";
import News from "../components/card/News";

const HomePage = () => {
  return (
    <VStack bgColor="gray.50" w="full">
      <Flex direction={{ base: "column", md: "row-reverse" }} w="full">
        <SimpleGrid
          w={{ base: "full", md: "65%" }}
          bgColor="red.300"
          column="2"
          rowGap="8"
          columnGap="8"
        >
          <GridItem w="full" bgColor="yellow.400" colSpan={2}>
            <News />
          </GridItem>
          <GridItem
            w="full"
            h="40"
            bgColor="yellow.500"
            colSpan={{ base: 2, md: 1 }}
          ></GridItem>
          <GridItem
            w="full"
            h="40"
            bgColor="yellow.600"
            colSpan={{ base: 2, md: 1 }}
          ></GridItem>
        </SimpleGrid>
        <Flex w={{ base: "full", md: "35%" }} h={60} bgColor="blue.400"></Flex>
      </Flex>
    </VStack>
  );
};

export default HomePage;
