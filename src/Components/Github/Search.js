import { Box, Heading, Input, Button, Flex } from "@chakra-ui/react";
import { useState,useContext } from "react";
import axios from "axios";
import myContext from "./Context";

function Search(props) {

  const [username, setUsername] = useState("");
  const {validData}=useContext(myContext);
  
  const getUserData = () => {
    axios
      .get(`https://api.github.com/users/${username}`)
      .then((res) => {
        console.log(res);
        validData(res.data);
      })
      .catch(() => {
        alert("Failed to fetch User Details");
      });
  };
  return (
    <Box>
      <Box mb="15px">
        <Heading size="lg" color="green">
          GITHUB PROJECT
        </Heading>
      </Box>

      <Flex>
        <Input
          placeholder="Enter Github User Id"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <Button
          variant="outline"
          color="green"
          p="10px 70px"
          onClick={getUserData}
        >
          Search
        </Button>
      </Flex>

    </Box>
  );
}

export default Search;