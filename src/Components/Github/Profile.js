import { Box, Button, Heading } from "@chakra-ui/react";
import React,{useContext} from "react";
import myContext from "./Context";
function Profile(props) {
    const {data}=useContext(myContext);
 
  return (
    <Box textAlign="center" boxShadow="dark-lg " border-roundedEnd={'10px'}>
      <img
        src={data.avatar_url || "https://media.istockphoto.com/id/1016761216/photo/portrait-concept.jpg?s=612x612&w=0&k=20&c=JsGhLiCeBZs7NeUY_3wjDlLfVkgDJcD9UCXeWobe7Ak="}
        height="200px" alt=''
      />
      <Heading size="md" my={2}>{data.login || 'No Name'}</Heading>
     
      <p>
        {data.bio}
      </p>

      <Button color="green"><a href={`https://github.com/${data.login}`}>View Profile</a></Button>
    </Box>
  );
}

export default Profile;