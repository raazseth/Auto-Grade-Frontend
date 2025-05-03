import { Box } from "@mui/material";
import { IGrades } from "@typed/Misc";
import { useState, useRef } from "react";
import Text from "./Core/Text";
import "./index.css";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import IconButton from '@mui/material/IconButton';

interface IProps {
  grade: IGrades;
}

const GradeCard = ({ grade }: IProps) => {
  // const [isReadMore, setisReadMore] = useState<boolean>(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState<number | "auto">(0);
  const [isOpen, setisOpen] = useState<boolean>(false)

  // useEffect(() => {
  //   if (contentRef.current) {
  //     setContentHeight(isReadMore ? contentRef.current.scrollHeight : 92);
  //   }
  // }, [isReadMore]);

  const getGradeStyle = (grade: number) => {
    if (grade >= 75) {
      return {
        backgroundColor: "#e6f4ea", // light green
        color: "#2e7d32",           // dark green
        border: "1px solid #2e7d32",
      };
    } else if (grade >= 50) {
      return {
        backgroundColor: "#fff8e1", // light yellow
        color: "#f9a825",           // amber
        border: "1px solid #f9a825",
      };
    } else {
      return {
        backgroundColor: "#fdecea", // light red
        color: "#c62828",           // dark red
        border: "1px solid #c62828",
      };
    }
  };

  function extractPureHTML() {
    return grade?.feedback
      .replace(/```html/g, '')
      .replace(/```/g, '')
      .trim();

  }

  const handleAccordion = () => {
    setisOpen(!isOpen)
  }

  return (
    <Box
      sx={{
        transition: "all 0.4s ease-in-out",
        borderRadius: "12px",
        padding: 1.6,
        backgroundColor: "#fff",
        maxWidth: 800,
        width: "90%",
        margin: "12px auto",
      }}
      className="assignment-card"
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Text
          variant="h6"
          sx={{ fontWeight: "bold", fontSize: 17, color: "#333" }}
        >
          {grade.name}
        </Text>

        <Text
          sx={{
            marginLeft: "8px",
            fontWeight: 600,
            padding: "0px 6px",
            borderRadius: "16px",
            fontSize: "0.9rem",
            display: "inline-block",
            minWidth: "50px",
            textAlign: "center",
            ...getGradeStyle(grade.grade),
          }}
        >
          {grade.grade}
        </Text>
        <IconButton
          aria-label={isOpen ? 'collapse' : 'expand'}
          onClick={handleAccordion}
          size="small"
          sx={{ ml: "auto" }}
        >
          {
            !isOpen ?
              <FaAngleDown onClick={handleAccordion} size={20} color="#222" />
              : <FaAngleUp onClick={handleAccordion} size={20} color="#222" />
          }
        </IconButton>

      </Box>
      <Text
        sx={{
          opacity: 0.7,
          fontSize: "0.8rem",
          color: "#222",
          mt: .5,
          fontStyle: "italic"
        }}
      >
        {grade.email}
      </Text>
      {isOpen && grade.feedback && (
        <div
          style={{
            marginTop: "10px",
          }}
          dangerouslySetInnerHTML={{ __html: extractPureHTML() }}
        />
      )}

    </Box>
  );
};

export default GradeCard;
