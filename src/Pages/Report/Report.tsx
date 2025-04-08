import Text from "@components/Core/Text";
import Body from "@layout/Body";
import { Box } from "@mui/material";
import { useLocation } from "react-router-dom";

const Report = () => {
  const location = useLocation();
  const data = location.state;
  console.log(data,"djj")
  return (
    <Body title="Report">
      <Box
        className="assignment-container"
        sx={{ width: "50%", textAlign: "center" }}
      >
        <Text variant="h6">Under Development...</Text>
      </Box>
    </Body>
  );
};

export default Report;
