import { FC, useEffect, ReactNode, CSSProperties } from "react";
import Footer, { FooterProps } from "./Footer";
import Header from "./Header";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/material";
import "./Styles/Body.css";

interface BodyProps {
  title?: string;
  showHeader?: boolean;
  showFooter?: boolean;
  configs?: {
    footerProps?: FooterProps;
  };
  isLoading?: boolean;
  sx?: CSSProperties;
  children?: ReactNode;
}

const Body: FC<BodyProps> = ({
  title = "GDG",
  showHeader = true,
  showFooter = true,
  isLoading = false,
  configs,
  sx,
  children,
}) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <Box className="body-container">
      <Box className="body-header">{showHeader && <Header />}</Box>
      <Box style={sx} component="main" className="body-main fade-in">
        {children}
        {isLoading && (
          <div className="loading-overlay">
            <CircularProgress color="inherit" />
          </div>
        )}
      </Box>
      {showFooter && <Footer {...configs?.footerProps} />}
    </Box>
  );
};

export default Body;
