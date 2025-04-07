import { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import {
  FaHome,
  FaSearch,
  FaChalkboardTeacher,
  FaClipboardList,
  FaChartBar,
  FaUserCircle,
  FaCog,
} from "react-icons/fa";
import "./Styles/Footer.css";

export interface FooterProps {
  type?: "sticky" | "fixed";
}

const ICON_SIZE = 20;
const ICON_COLOR = "#333";
const Footer: FC<FooterProps> = ({ type = "sticky" }) => {
  const location = useLocation();

  const StickyItems = [
    {
      icon: <FaHome size={ICON_SIZE} color={ICON_COLOR} />,
      label: "Home",
      path: "/",
    },
    // {
    //   icon: <FaSearch size={ICON_SIZE} color={ICON_COLOR} />,
    //   label: "Search",
    //   path: "/search",
    // },
    {
      icon: <FaChalkboardTeacher size={ICON_SIZE} color={ICON_COLOR} />,
      label: "Classes",
      path: "/classes",
    },
    {
      icon: <FaClipboardList size={ICON_SIZE} color={ICON_COLOR} />,
      label: "Assignment",
      path: "/assignment",
    },
    {
      icon: <FaChartBar size={ICON_SIZE} color={ICON_COLOR} />,
      label: "Report",
      path: "/report",
    },
    {
      icon: <FaUserCircle size={ICON_SIZE} color={ICON_COLOR} />,
      label: "Profile",
      path: "/profile",
    },
    {
      icon: <FaCog size={ICON_SIZE} color={ICON_COLOR} />,
      label: "Settings",
      path: "/settings",
    },
  ];

  if (type === "sticky") {
    return (
      <Box className="footer-sticky">
        {StickyItems.map((item, index) => {
          const isActive = location.pathname === item.path;

          return (
            <Tooltip title={isActive ? "" : item.label} key={index} arrow>
              <Box
                className={`footer-icon-button ${
                  isActive ? "active animate__animated animate__fadeIn" : ""
                }`}
              >
                <Link to={item.path}>
                  <IconButton disableRipple={isActive} color="inherit">
                    {item.icon}
                  </IconButton>
                </Link>

                {isActive && (
                  <Typography variant="caption" className="footer-label">
                    {item.label}
                  </Typography>
                )}
              </Box>
            </Tooltip>
          );
        })}
      </Box>
    );
  }

  return null;
};

export default Footer;
