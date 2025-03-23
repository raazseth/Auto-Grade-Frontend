import { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import {
  FaArrowUp,
  FaHome,
  FaUser,
  FaCog,
  FaBell,
  FaEnvelope,
  FaInfoCircle,
  FaSearch,
} from "react-icons/fa";
import "./Styles/Footer.css";

export interface FooterProps {
  type?: "sticky" | "fixed";
}

const ICON_SIZE = 20;

const Footer: FC<FooterProps> = ({ type = "sticky" }) => {
  const location = useLocation();

  const StickyItems = [
    { icon: <FaHome size={ICON_SIZE} />, label: "Home", path: "/" },
    { icon: <FaSearch size={ICON_SIZE} />, label: "Search", path: "/search" },
    {
      icon: <FaBell size={ICON_SIZE} />,
      label: "Notifications",
      path: "/notifications",
    },
    {
      icon: <FaEnvelope size={ICON_SIZE} />,
      label: "Messages",
      path: "/messages",
    },
    { icon: <FaUser size={ICON_SIZE} />, label: "Profile", path: "/profile" },
    { icon: <FaCog size={ICON_SIZE} />, label: "Settings", path: "/settings" },
    { icon: <FaInfoCircle size={ICON_SIZE} />, label: "Info", path: "/info" },
    { icon: <FaArrowUp size={ICON_SIZE} />, label: "Top", path: "/top" },
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
                  isActive ? "active animate__animated animate__slideInUp" : ""
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
