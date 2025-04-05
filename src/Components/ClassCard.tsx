import React from "react";
import { Box, Chip } from "@mui/material";
import { FaChalkboardTeacher, FaUser, FaLink } from "react-icons/fa";
import { IClassroom } from "@typed/Misc";
import "./index.css";
import Text from "./Core/Text";
import Button from "./Core/Button";
import moment from "moment";
import useGlobalState from "@utils/useGlobalState";

interface ClassCardProps {
  classData: IClassroom;
}

const ClassCard: React.FC<ClassCardProps> = ({ classData }) => {
  const { state, dispatch } = useGlobalState();

  const activateClass = () => {
    dispatch({
      type: "SET_COURSE",
      payload: classData,
    });
  };

  return (
    <Box
      className="class-card"
      onClick={activateClass}
      sx={{
        border:
          state.course?.id === classData.id
            ? "1px solid var(--primary)"
            : "transparent",
      }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={1}
      >
        <Text variant="body1" component="div">
          {classData.name.length > 15
            ? `${classData.name.substring(0, 15)}...`
            : classData.name}
        </Text>
        {classData.section && (
          <Chip
            label={`Section: ${classData.section}`}
            size="small"
            sx={{ fontWeight: 500, borderRadius: "12px", padding: "3px 8px" }}
          />
        )}
      </Box>

      <Text
        variant="subtitle2"
        style={{
          fontStyle: "italic",
          fontSize: 12,
          opacity: 0.8,
        }}
        color="text.secondary"
      >
        Owner ID: {classData.ownerId}
      </Text>

      <Box display="flex" alignItems="center" mt={1}>
        <Chip
          label={moment(classData.creationTime).format("DD MMM YYYY")}
          variant="outlined"
          color="success"
          sx={{
            fontWeight: 600,
            borderRadius: "24px",
            padding: "4px 12px",
            fontSize: "12px",
            backgroundColor: "#E8F5E9",
            color: "#388E3C",
          }}
        />
      </Box>

      <Box display="flex" justifyContent="center" mt={2}>
        <Button
          variant="contained"
          href={classData.alternateLink}
          rel="noopener noreferrer"
          sx={{
            borderRadius: "30px",
            fontWeight: 600,
            width: "100%",
            fontSize: 12,
            padding: "8px 0",
            textTransform: "none",
            boxShadow: "none",
          }}
        >
          Open Classroom
        </Button>
      </Box>
    </Box>
  );
};

export default ClassCard;
