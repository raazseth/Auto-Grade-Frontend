import Text from "@components/Core/Text";
import Body from "@layout/Body";
import { Box } from "@mui/material";


const Profile = () => {

  return (
    <Body title="Profile" showHeader>
      
      <Box
        className="assignment-container"
        sx={{width:"50%", textAlign:"center"}}
       
      >
        <Text variant="h6">Under Development...</Text>

      </Box>
    </Body>
  );
};

export default Profile;
