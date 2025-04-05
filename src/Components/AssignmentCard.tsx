import React, { useState } from "react";
import moment from "moment";
import { Box, CardContent } from "@mui/material";
import "./index.css";
import Text from "./Core/Text";
import { FaBook, FaStar, FaCalendarAlt, FaClock } from "react-icons/fa";
import { IAssignment } from "@typed/Misc";
import Button from "./Core/Button";
import { postGradeAssignment } from "@api/misc";
import useGlobalState from "@utils/useGlobalState";

interface AssignmentCardProps {
  assignment: IAssignment;
  status?: "Pending" | "Completed" | "Overdue";
}

const formatDueDate = (dueDate: IAssignment["dueDate"]) => {
  if (!dueDate) return "—";
  const { year, month, day } = dueDate;
  if (year && month && day) {
    return moment({ year, month: month - 1, day }).format("DD/MM/YYYY");
  }
  return "—";
};

const formatDueTime = (dueTime: IAssignment["dueTime"]) => {
  if (!dueTime || dueTime.hours === undefined || dueTime.minutes === undefined)
    return "—";
  const { hours, minutes } = dueTime;
  return moment({ hour: hours, minute: minutes }).format("HH:mm");
};

const AssignmentCard: React.FC<AssignmentCardProps> = ({ assignment }) => {
  const [grade, setGrade] = useState(null);
  const [isLoading, setisLoading] = useState(false);
  const [isGrade, setIsGrade] = useState(false);
  const { state } = useGlobalState();

  const handleViewGrading = async () => {
    try {
      setisLoading(true);
      const response = await postGradeAssignment(
        { courseId: state.course.id, assignmentId: assignment.id },
        state.token
      );

      if (response.status) {
        setIsGrade(true);
      }
    } catch (error) {
      setGrade(null);
    } finally {
      setisLoading(false);
    }
  };

  return (
    <Box className="assignment-card">
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Text variant="h6" component="div" gutterBottom>
            {assignment.title}
          </Text>
          <Button
            variant="contained"
            onClick={handleViewGrading}
            isLoading={isLoading}
            sx={{
              borderRadius: "30px",
              fontWeight: 600,
              width: "auto",
              fontSize: 12,
              padding: "4px 12px",
              textTransform: "none",
              boxShadow: "none",
              backgroundColor: isGrade
                ? "var(--success-dark)"
                : "var(--primary)",
            }}
          >
            {isGrade ? "Graded" : "Grade Assignment"}
          </Button>
        </Box>
        {assignment.description && (
          <Text variant="body2" color="text.secondary" paragraph>
            {assignment.description}
          </Text>
        )}

        <Box display="flex" alignItems="center" mt={2} flexWrap="wrap">
          <Box className="assignment-card__ type">
            <FaBook style={{ marginRight: 6 }} />
            <Text variant="caption">{assignment.workType}</Text>
          </Box>

          <Box className="assignment-card__ marks">
            <FaStar style={{ marginRight: 6 }} />
            <Text variant="caption">Max Marks: {assignment.maxPoints}</Text>
          </Box>

          <Box className="assignment-card__ time">
            <FaCalendarAlt style={{ marginRight: 6 }} />
            <Text variant="caption">{formatDueDate(assignment?.dueDate)}</Text>
            <FaClock style={{ margin: "0 6px" }} />
            <Text variant="caption">{formatDueTime(assignment?.dueTime)}</Text>
          </Box>
        </Box>
        {/* {isGrade && <Box>assignment-card</Box>} */}
      </CardContent>
    </Box>
  );
};

export default AssignmentCard;
