import { Box } from "@mui/material";
import { IGrades } from "@typed/Misc";
import { useState, useRef, useEffect } from "react";
import Text from "./Core/Text";
import "./index.css";

interface IProps {
  grade: IGrades;
}

const GradeCard = ({ grade }: IProps) => {
  const [isReadMore, setisReadMore] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState<number | "auto">(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(isReadMore ? contentRef.current.scrollHeight : 92);
    }
  }, [isReadMore]);

  return (
    <Box
      sx={{
        transition: "all 0.4s ease-in-out",
        borderRadius: "12px",
        boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
        padding: 2,
        backgroundColor: "#fff",
        maxWidth: 800,
        margin: "16px auto",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", marginBottom: 1 }}>
        <Text
          variant="h6"
          sx={{ fontWeight: "bold", fontSize: 16, color: "#333" }}
        >
          {grade.name}
        </Text>
        <Text
          sx={{
            marginLeft: 1,
            opacity: 0.7,
            fontSize: "0.9rem",
            color: "#555",
          }}
        >
          {grade.email}
        </Text>
        <Text
          sx={{
            marginLeft: "auto",
            fontWeight: 600,
            backgroundColor: "#e0f7fa",
            color: "#006064",
            border: "1px solid #006064",
            padding: "4px 12px",
            borderRadius: "16px",
            fontSize: "0.9rem",
            display: "inline-block",
            minWidth: "50px",
            textAlign: "center",
          }}
        >
          {grade.grade}
        </Text>
      </Box>

      {grade.feedback && (
        <Box
          sx={{
            maxHeight: contentHeight,
            overflow: "hidden",
            transition: "max-height 0.5s ease",
            position: "relative",
          }}
        >
          <Text
            variant="body2"
            color="text.secondary"
            ref={contentRef}
            sx={{
              whiteSpace: "pre-line",
              lineHeight: 1.6,
            }}
          >
            {grade.feedback}
          </Text>
        </Box>
      )}

      {grade.feedback.length > 200 && (
        <Text
          onClick={() => setisReadMore(!isReadMore)}
          sx={{
            color: "blue !important",
            cursor: "pointer",
            mt: 1,
            fontSize: 14,
            transition: "color 0.3s",
            "&:hover": {
              color: "#004ba0",
              textDecoration: "underline",
            },
          }}
        >
          {isReadMore ? "Show Less" : "Show More"}
        </Text>
      )}
    </Box>
  );
};

export default GradeCard;
