import React from "react";
import Search from "./Search";
import Profile from "./Profile";
import Details from "./Details";
import { Box, Container, Flex } from "@chakra-ui/react";

function Home(props) {
  return (
    <Container boxShadow="dark-lg" mt="10px" maxW="1000px" p="30px" justifyContent={'center'}>
      <Box mb="10px">
        <Search />
      </Box>

      <Flex>
        <Box w="30%" m='10px'>
          <Profile />
        </Box>
        <Box w="65%" h='100%' bg="white" color="black">
          <Details />
        </Box>
      </Flex>
    </Container>
  );
}

export default Home;