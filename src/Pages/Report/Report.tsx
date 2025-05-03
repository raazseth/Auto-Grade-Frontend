import Text from "@components/Core/Text";
import GradeCard from "@components/GradeCard";
import Body from "@layout/Body";
import { Box } from "@mui/material";
import { IGrades } from "@typed/Misc";
import { FaStar } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const Report = () => {
  const { state } = useLocation();
  // console.log(state.assignment)
  return (
    <Body title="Report">
      <Box
        className="assignment-container"
        sx={{ width: "50%", }}
      >
        {
          state?.assignment &&
          <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <Text variant="h6" >
              {state.assignment?.title}
            </Text>
            <Box className="assignment-card__ marks">
              <FaStar style={{ marginRight: 6 }} />
              <Text variant="caption">Max Marks: {state.assignment?.maxPoints}</Text>
            </Box>

          </Box>
        }
        {
          state?.grade?.gradedStudents?.length > 0 &&
          state?.grade?.gradedStudents?.map((grd: IGrades) => (
            <GradeCard grade={grd} key={grd.userId} />
          ))
        }
      </Box>
    </Body>
  );
};

export default Report;
