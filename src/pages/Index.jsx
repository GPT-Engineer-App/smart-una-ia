import { Container, Text, VStack, HStack, IconButton, Image, Box, Heading, Button } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>
            Welcome to Our Website
          </Heading>
          <Text fontSize="lg">We are glad to have you here. Explore and enjoy our content!</Text>
        </Box>
        <Image src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHRlYW18ZW58MHx8fHwxNzE3NzEwMTA3fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Happy Team" borderRadius="md" boxShadow="lg" />
        <HStack spacing={4}>
          <IconButton aria-label="Facebook" icon={<FaFacebook />} size="lg" />
          <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" />
          <IconButton aria-label="Instagram" icon={<FaInstagram />} size="lg" />
        </HStack>
        <Button colorScheme="teal" size="lg">
          Get Started
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
