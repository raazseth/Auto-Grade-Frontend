import React from "react";
import { Card, CardContent, Box, Chip } from "@mui/material";
import "./index.css";
import Text from "./Core/Text";
import { FaBook, FaStar, FaCalendarAlt, FaClock } from "react-icons/fa";

interface AssignmentCardProps {
  title: string;
  description: string;
  type: string;
  maxMarks: number;
  dueDate: string;
  dueTime: string;
  status?: "Pending" | "Completed" | "Overdue";
}

const getStatusColor = (status: string) => {
  switch (status) {
    case "Completed":
      return "success";
    case "Overdue":
      return "error";
    default:
      return "warning";
  }
};

const AssignmentCard: React.FC<AssignmentCardProps> = ({
  title,
  description,
  type,
  maxMarks,
  dueDate,
  dueTime,
  status = "Pending",
}) => {
  return (
    <Box className="assignment-card">
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Text variant="h6" component="div" gutterBottom>
            {title}
          </Text>
          <Chip
            label={status}
            color={getStatusColor(status)}
            size="small"
            sx={{ fontWeight: 500 }}
          />
        </Box>

        <Text variant="caption" color="text.secondary" paragraph>
          {description}
        </Text>
        <Box
          display="flex"
          // justifyContent="space-between"
          alignItems="center"
          mt={1}
        >
          <Text
            variant="body2"
            color="secondary"
            display="flex"
            alignItems="center"
            className="assignment-card__ type"
          >
            <FaBook style={{ marginRight: 4 }} /> {type}
          </Text>
          <Text
            variant="body2"
            color="secondary"
            display="flex"
            alignItems="center"
            className="assignment-card__ marks"
          >
            <FaStar style={{ marginRight: 4 }} /> Max Marks: {maxMarks}
          </Text>
        <Text
          variant="body2"
          color="text.secondary"
          display="flex"
          alignItems="center"
          className="assignment-card__ time"
        >
          <FaCalendarAlt style={{ marginRight: 4 }} /> {dueDate}{" "}
          <FaClock style={{ marginLeft: 8, marginRight: 4 }} /> {dueTime}
        </Text>
        </Box>
      </CardContent>
    </Box>
  );
};

export default AssignmentCard;
