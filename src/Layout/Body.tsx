import { FC, useEffect, ReactNode } from "react";
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
  children?: ReactNode;
}

const Body: FC<BodyProps> = ({
  title = "GDG",
  showHeader = false,
  showFooter = true,
  isLoading = false,
  configs,
  children,
}) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <Box className="body-container">
      {showHeader && <Header />}
      <Box component="main" className="body-main fade-in">
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
