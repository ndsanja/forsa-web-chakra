import {
  VStack,
  Flex,
  SimpleGrid,
  GridItem,
  AspectRatio,
  Image,
  Heading,
  Text,
  Box,
} from "@chakra-ui/react";

const News = () => {
  return (
    <VStack w="full">
      <AspectRatio w="full" h="full" ratio={16 / 9}>
        <Image
          src="https://news.harvard.edu/wp-content/uploads/2021/10/20211028_cop26_wfire-1600x900.jpg"
          alt="test Image"
        />
      </AspectRatio>
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
      {/* <SimpleGrid column="2" w="full" rowGap="8" columnGap="8">
        <GridItem colSpan={1} w="full">
          <Heading as="h6" fontSize="sm">
            Category
          </Heading>
          <Heading as="h1">Ttilte</Heading>
        </GridItem>
        <GridItem colSpan={1} w="full">
          <Text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati
            velit distinctio eum! Voluptatem possimus harum sunt non a,
          </Text>
        </GridItem>
      </SimpleGrid> */}
    </VStack>
  );
};

export default News;
