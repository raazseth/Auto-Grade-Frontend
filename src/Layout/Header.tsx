import { IoLogOut, IoSearchOutline } from "react-icons/io5";
import "./Styles/Header.css";
import {
  Avatar,
  Box,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import { FaCog } from "react-icons/fa";
import useGlobalState from "@utils/useGlobalState";
import { useState } from "react";
import useAuth from "@utils/useAuth";
import { useNavigate } from "react-router-dom";
import Text from "@components/Core/Text";

const Header = () => {
  const { state, dispatch } = useGlobalState();
  const { setAuth } = useAuth();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const logout = () => {
    localStorage.clear();
    setAuth();
    dispatch({
      type: "SET_USER",
      payload: {
        user: null,
        token: null,
      },
    });
    setAnchorEl(null);
  };

  return (
    <header className="header-main">
      <Text
        style={{
          fontFamily: "Arimo, sans-serif",
          color: "azure",
          fontSize: 24,
          marginRight: "1em",
        }}
      >
        AutoGrade
      </Text>
      <Box
        onClick={() => {
          navigate("/search");
        }}
        className="search-box"
      >
        <IoSearchOutline size={20} />
        <span>Search classes or students...</span>
      </Box>
      {state.course && (
        <Tooltip title="Selected Course">
          <Box className="activeClass">
            <div className="activeClass-Indicator" />
            <span>{state.course.name}</span>
          </Box>
        </Tooltip>
      )}
      <IconButton>
        <FaCog size={20} color="azure" />
      </IconButton>
      {state.user && (
        <IconButton
          onClick={handleClick}
          size="small"
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <Avatar src={state.user?.picture} className="pfp">
            {state.user?.name[0] ?? ""}
          </Avatar>
        </IconButton>
      )}

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={() => {
          setAnchorEl(null);
        }}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&::before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={logout}>
          <ListItemIcon>
            <IoLogOut size={24} />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </header>
  );
};

export default Header;
