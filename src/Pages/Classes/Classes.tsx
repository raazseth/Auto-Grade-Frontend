import { getAllCourses } from "@api/misc";
import ClassCard from "@components/ClassCard";
import Body from "@layout/Body";
import { Box, CircularProgress } from "@mui/material";
import { IClassroom } from "@typed/Misc";
import useGlobalState from "@utils/useGlobalState";
import { useEffect, useState } from "react";

const Classes = () => {
  const [classes, setclasses] = useState<IClassroom[] | []>([]);
  const [isLoading, setisLoading] = useState(true);
  const { state } = useGlobalState();

  const getCourses = async () => {
    try {
      const res = (await getAllCourses(state.token)) as any;
      setclasses(res.courses || []);
    } catch (error) {
      console.log(error);
    } finally {
      setisLoading(false);
    }
  };

  useEffect(() => {
    getCourses();
  }, []);

  return (
    <Body title="Classes" showHeader>
      <Box
        className="assignment-container"
        sx={{
          flexDirection: "row",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {!isLoading || classes.length > 0 ? (
          classes.map((cls: IClassroom) => (
            <ClassCard key={cls.id} classData={cls} />
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
    </Body>
  );
};

export default Classes;
