import { IoSearchOutline } from "react-icons/io5";
import "./Styles/Header.css";
import { Box, IconButton, Tooltip } from "@mui/material";
import { FaCog } from "react-icons/fa";
import pfp from "@assets/pfp.jpg";
import useGlobalState from "@utils/useGlobalState";

const Header = () => {
  const { state } = useGlobalState();

  return (
    <header className="header-main">
      <Box className="search-box">
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
      <img src={state.user?.picture || pfp} alt="pfp" className="pfp" />
    </header>
  );
};

export default Header;
