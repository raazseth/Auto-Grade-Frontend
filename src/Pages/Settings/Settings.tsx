import Text from "@components/Core/Text";
import Body from "@layout/Body";
import { Box } from "@mui/material";


const Settings = () => {

  return (
    <Body title="Settings" showHeader>
      
      <Box
        className="assignment-container"
        sx={{width:"50%", textAlign:"center"}}
       
      >
        <Text variant="h6">Under Development...</Text>

      </Box>
    </Body>
  );
};

export default Settings;
