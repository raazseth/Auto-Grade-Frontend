import Body from "@layout/Body";
import "./index.css";
import { Box } from "@mui/material";
import Input from "@components/Core/Input";
import Text from "@components/Core/Text";
import Button from "@components/Core/Button";
import { useState } from "react";
import AssignmentCard from "@components/AssignmentCard";

const DUMMY_ASSIGNMENTS = [
  {
    assignmentName: "History Research Paper",
    assignmentDescription:
      "Write a comprehensive research paper on the causes and consequences of World War II. Include analysis of political, economic, and social impacts across different nations. Minimum word count: 1500 words.",
    assignmentType: "Essay",
    maxMarks: 100,
    dueDate: "2025-04-10",
    dueTime: "23:59",
  },
  {
    assignmentName: "Algebra Problem Set",
    assignmentDescription:
      "Solve 20 algebraic equations involving linear, quadratic, and polynomial expressions. Show all steps and reasoning for each solution.",
    assignmentType: "Worksheet",
    maxMarks: 50,
    dueDate: "2025-04-05",
    dueTime: "17:00",
  },
  {
    assignmentName: "Physics Lab Report",
    assignmentDescription:
      "Conduct the pendulum experiment to measure acceleration due to gravity. Record observations, analyze data, and draw conclusions based on your findings.",
    assignmentType: "Lab Report",
    maxMarks: 75,
    dueDate: "2025-04-08",
    dueTime: "14:00",
  },
  {
    assignmentName: "Creative Writing: Short Story",
    assignmentDescription:
      "Write a fictional short story inspired by a personal experience or a 'what if' scenario. Focus on character development, setting, and plot twists. Minimum word count: 1000 words.",
    assignmentType: "Creative Writing",
    maxMarks: 60,
    dueDate: "2025-04-12",
    dueTime: "22:00",
  },
  {
    assignmentName: "Environmental Science Presentation",
    assignmentDescription:
      "Prepare a 5-minute presentation on climate change's effects on local biodiversity. Include images, statistics, and a call to action.",
    assignmentType: "Presentation",
    maxMarks: 80,
    dueDate: "2025-04-15",
    dueTime: "10:00",
  },
  {
    assignmentName: "Software Development Project",
    assignmentDescription:
      "Build a basic to-do list web app using React. Include CRUD functionality and local storage for data persistence. Submit both code and a demo video.",
    assignmentType: "Project",
    maxMarks: 150,
    dueDate: "2025-04-20",
    dueTime: "23:59",
  },
];

const Assignment = () => {
  const [pageType, setPageType] = useState<"Create" | "View">("View");
  const [data, setData] = useState(DUMMY_ASSIGNMENTS);
  const [bodyData, setbodyData] = useState<any>({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setbodyData({ ...bodyData, [name]: value });
  };
  const getPageType = () => {
    switch (pageType) {
      case "Create":
        return (
          <Box className="assignment-container">
            <Text variant="h6" style={{ marginBottom: "10px" }}>
              Create Assignment
            </Text>
            <Input
              label="Assignment Name"
              placeholder="Enter Assignment Name"
              onChange={handleChange}
              name="assignmentName"
              value={bodyData.assignmentName}
            />
            <Input
              parent={{ sx: { mt: 2 } }}
              label="Assignment Description"
              placeholder="Enter Assignment Description"
              rows={4}
              multiline
              onChange={handleChange}
              name="assignmentDescription"
              value={bodyData.assignmentDescription}
            />
            <Input
              parent={{ sx: { mt: 2 } }}
              label="Assignment Type"
              placeholder="Enter Assignment Type"
              onChange={handleChange}
              name="assignmentType"
              value={bodyData.assignmentType}
            />
            <Input
              parent={{ sx: { mt: 2 } }}
              label="Max Marks"
              type="number"
              placeholder="Enter Assignment Max Marks"
              onChange={handleChange}
              name="maxMarks"
              value={bodyData.maxMarks}
            />
            <Box>
              <Input
                parent={{ sx: { mt: 2, width: "49%", mr: 0.5 } }}
                label="Due Date"
                type="date"
                placeholder="Choose Assignment Due Date"
                value={bodyData.dueDate}
                onChange={handleChange}
                name="dueDate"
              />
              <Input
                parent={{ sx: { mt: 2, width: "49%", ml: 1 } }}
                label="Due Time"
                type="time"
                placeholder="Choose Assignment Due Time"
                value={bodyData.dueTime}
                onChange={handleChange}
                name="dueTime"
              />
            </Box>
            <Box sx={{ mt: 3, display: "flex", justifyContent: "flex-end" }}>
              <Button
                style={{
                  width: "40%",
                  color: "black",
                  border: "1px solid #09203f",
                }}
                variantColor="transparent"
                onClick={() => setPageType("View")}
              >
                Cancel
              </Button>
              <Button
                onClick={() => {
                  console.log(bodyData);
                  setData([...data, bodyData]);
                }}
                style={{ width: "40%", marginLeft: "8px" }}
              >
                Create
              </Button>
            </Box>
          </Box>
        );

      case "View":
        return (
          <Box className="assignment-container">
            <Box
              style={{
                marginBottom: "10px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text variant="h6">View Assignment</Text>
              <Text
                variant="body2"
                variantColor="secondary"
                style={{ textDecoration: "underline", cursor: "pointer" }}
                onClick={() => setPageType("Create")}
              >
                Create Assignment
              </Text>
            </Box>

            {data.map((assignment, index) => (
              <AssignmentCard
                title={assignment.assignmentName}
                description={assignment.assignmentDescription}
                type={assignment.assignmentType}
                maxMarks={assignment.maxMarks}
                dueDate={assignment.dueDate}
                dueTime={assignment.dueTime}
                key={index}
              />
            ))}
          </Box>
        );

      default:
        break;
    }
  };
  return (
    <Body title="Assignment" showHeader>
      {getPageType()}
    </Body>
  );
};

export default Assignment;
