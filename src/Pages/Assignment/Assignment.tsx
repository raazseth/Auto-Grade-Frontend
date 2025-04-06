import Body from "@layout/Body";
import "./index.css";
import { Box, CircularProgress } from "@mui/material";
import Input from "@components/Core/Input";
import Text from "@components/Core/Text";
import Button from "@components/Core/Button";
import Select from "@components/Core/Select";
import { useEffect, useState } from "react";
import AssignmentCard from "@components/AssignmentCard";
import {
  getAllAssignments,
  getAllCourses,
  saveAssignment,
} from "../../APIs/misc";
import { IAssignment, IClassroom } from "@typed/Misc";
import useGlobalState from "@utils/useGlobalState";

const Assignment = () => {
  const [pageType, setPageType] = useState<"Create" | "View">("View");
  const [bodyData, setbodyData] = useState<any>({});
  const [classes, setclasses] = useState<
    { label: string; value: string }[] | []
  >([]);
  const [assignment, setassignment] = useState<IAssignment[] | []>([]);
  const [isLoading, setisLoading] = useState(true);
  const [localFileValue, setlocalFileValue] = useState(null);
  const { state } = useGlobalState();

  const getCourses = async () => {
    try {
      const res = (await getAllCourses(state.token)) as any;

      if (!res.courses.length) {
        return;
      }
      const ids = res.courses.map((cls: IClassroom) => {
        return {
          label: cls.name,
          value: cls.id,
        };
      });
      setclasses(ids || []);
    } catch (error) {
      console.log(error);
    }
  };

  const getAssignment = async () => {
    try {
      const res = (await getAllAssignments(
        state.course.id,
        state.token
      )) as any;
      setassignment(res.courseWork || []);
    } catch (error) {
      console.log(error);
    } finally {
      setisLoading(false);
    }
  };

  useEffect(() => {
    getCourses();
    getAssignment();
  }, [state.course]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setbodyData({ ...bodyData, [name]: value });
  };

  const handleSave = async () => {
    setisLoading(true);
    try {
      const response = await saveAssignment(
        { ...bodyData, id: state.course?.id },
        state.token
      );

      if (response) {
        getAssignment();
        setPageType("View");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setisLoading(false);
    }
  };
  const getPageType = () => {
    switch (pageType) {
      case "Create":
        return (
          <Box className="assignment-container">
            {state.course.id && (
              <Text variant="h6" style={{ marginBottom: "10px" }}>
                Create Assignment
              </Text>
            )}
            <Input
              parent={{ sx: { mt: 2 } }}
              label="Assignment Prompt"
              placeholder="Enter Assignment Prompt"
              rows={5}
              multiline
              onChange={handleChange}
              name="assignmentPrompt"
              value={bodyData.assignmentPrompt}
            />
            <Input
              label="Assignment Name"
              placeholder="Enter Assignment Name"
              onChange={handleChange}
              name="assignmentName"
              value={bodyData.assignmentName}
              parent={{ sx: { mt: 2 } }}
            />
            <Select
              parent={{ sx: { mt: 2 } }}
              options={[
                {
                  value: "ASSIGNMENT_SEVERITY_UNSPECIFIED",
                  label: "No severity specified",
                },
                { value: "NOT_APPLICABLE", label: "Not applicable" },
                { value: "MILD", label: "Mild" },
                { value: "MODERATE", label: "Moderate" },
                { value: "SEVERE", label: "Severe" },
              ]}
              label={"Assignment Severeity"}
              onChange={handleChange}
              name="assignmentSevereity"
              value={bodyData.assignmentSevereity}
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
            {/* {classes.length > 0 && (
              <Select
                parent={{ sx: { mt: 2 } }}
                options={classes}
                label={"Class"}
                onChange={handleChange}
                name="courseName"
                value={bodyData.courseName}
              />
            )} */}
            <Select
              parent={{ sx: { mt: 2 } }}
              options={[
                {
                  value: "COURSE_WORK_TYPE_UNSPECIFIED",
                  label: "No work type specified",
                },
                { value: "ASSIGNMENT", label: "Assignment" },
                {
                  value: "QUIZ",
                  label: "Quiz",
                },
              ]}
              label={"Assignment Type"}
              onChange={handleChange}
              name="assignmentType"
              value={bodyData.assignmentType}
            />
            {bodyData.assignmentType === "QUIZ" && (
              <Input
                parent={{ sx: { mt: 2 } }}
                label="Number of Questions"
                type="number"
                placeholder="Enter Number of Questions"
                onChange={handleChange}
                name="numberOfQuestions"
                value={bodyData.numberOfQuestions}
              />
            )}
            <Select
              parent={{ sx: { mt: 2 } }}
              label="Assignment Grade Term"
              options={[
                {
                  value: "FORMULA_BASED_GRADE",
                  label: "Formula based grade (Attendance + Assignment)",
                },
                {
                  value: "DIRECT_GRADE",
                  label: "Direct grade (assignment only)",
                },
                {
                  value: "NOT_APPLICABLE",
                  label: "Not applicable",
                },
                {
                  value: "UNSPECIFIED_GRADE",
                  label: "Unspecified grade",
                },
              ]}
              onChange={handleChange}
              name="assignmentGradeTerm"
              value={bodyData.assignmentGradeTerm}
            />
            {bodyData.assignmentGradeTerm === "FORMULA_BASED_GRADE" && (
              <Input
                parent={{ sx: { mt: 2 } }}
                label="Upload Attendance File (csv)"
                type="file"
                placeholder="Upload Attendance File"
                onChange={handleChange}
                name="attendanceFile"
                value={bodyData.attendanceFile}
              />
            )}
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
            <Input
              parent={{ sx: { mt: 2 } }}
              label="Material File"
              type="file"
              placeholder="Upload Material File"
              onChange={(e: any) => {
                if (e.target?.files?.length > 0) {
                  setbodyData({
                    ...bodyData,
                    materialFile: e.target.files[0],
                  });
                  setlocalFileValue(e.target.value);
                }
              }}
              name="materialFile"
              value={localFileValue}
            />
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
                onClick={handleSave}
                isLoading={isLoading}
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
            {!isLoading || assignment.length > 0 ? (
              assignment.map((assignment: IAssignment) => (
                <AssignmentCard key={assignment.id} assignment={assignment} />
              ))
            ) : (
              <CircularProgress
                size={24}
                sx={{
                  color: "var(--primary)",
                }}
              />
            )}
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
