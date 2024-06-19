import { Box, Container, Flex, Heading, Link, Text, VStack, HStack, Image } from "@chakra-ui/react";

const Index = () => {
  return (
    <Box>
      {/* Header */}
      <Box as="header" bg="gray.800" color="white" py={4}>
        <Container maxW="container.xl">
          <Flex justify="space-between" align="center">
            <HStack spacing={4}>
              <Image src="/images/logo.png" alt="Financial Times Logo" boxSize="50px" />
              <Heading as="h1" size="lg">Financial Times</Heading>
            </HStack>
            <HStack spacing={4}>
              <Link href="#" color="white">Home</Link>
              <Link href="#" color="white">World</Link>
              <Link href="#" color="white">Business</Link>
              <Link href="#" color="white">Tech</Link>
              <Link href="#" color="white">Markets</Link>
              <Link href="#" color="white">Opinion</Link>
              <Link href="#" color="white">Life & Arts</Link>
            </HStack>
          </Flex>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxW="container.xl" py={8}>
        <VStack spacing={8} align="stretch">
          {/* Top Stories Section */}
          <Box>
            <Heading as="h2" size="xl" mb={4}>Top Stories</Heading>
            <VStack spacing={4} align="stretch">
              <Box bg="gray.100" p={4} borderRadius="md">
                <Heading as="h3" size="md">Top Story 1</Heading>
                <Text>Summary of the top story 1...</Text>
              </Box>
              <Box bg="gray.100" p={4} borderRadius="md">
                <Heading as="h3" size="md">Top Story 2</Heading>
                <Text>Summary of the top story 2...</Text>
              </Box>
            </VStack>
          </Box>

          {/* Latest News Section */}
          <Box>
            <Heading as="h2" size="xl" mb={4}>Latest News</Heading>
            <VStack spacing={4} align="stretch">
              <Box bg="gray.100" p={4} borderRadius="md">
                <Heading as="h3" size="md">Latest News 1</Heading>
                <Text>Summary of the latest news 1...</Text>
              </Box>
              <Box bg="gray.100" p={4} borderRadius="md">
                <Heading as="h3" size="md">Latest News 2</Heading>
                <Text>Summary of the latest news 2...</Text>
              </Box>
            </VStack>
          </Box>

          {/* Other Categories Section */}
          <Box>
            <Heading as="h2" size="xl" mb={4}>Other Categories</Heading>
            <VStack spacing={4} align="stretch">
              <Box bg="gray.100" p={4} borderRadius="md">
                <Heading as="h3" size="md">Category 1</Heading>
                <Text>Summary of category 1...</Text>
              </Box>
              <Box bg="gray.100" p={4} borderRadius="md">
                <Heading as="h3" size="md">Category 2</Heading>
                <Text>Summary of category 2...</Text>
              </Box>
            </VStack>
          </Box>
        </VStack>
      </Container>

      {/* Footer */}
      <Box as="footer" bg="gray.800" color="white" py={4}>
        <Container maxW="container.xl">
          <Flex justify="space-between" align="center">
            <Text>&copy; {new Date().getFullYear()} Financial Times</Text>
            <HStack spacing={4}>
              <Link href="#" color="white">About</Link>
              <Link href="#" color="white">Contact</Link>
              <Link href="#" color="white">Privacy Policy</Link>
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;