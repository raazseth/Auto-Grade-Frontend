import { IoSearchOutline } from "react-icons/io5";
import "./Styles/Header.css";
import { Box, IconButton } from "@mui/material";
import { FaCog } from "react-icons/fa";
import pfp from "@assets/pfp.jpg";

const Header = () => {
  return (
    <header className="header-main">
      <Box className="search-box">
        <IoSearchOutline size={20} />
        <span>Search classes or students...</span>
      </Box>
      <IconButton>
        <FaCog size={20} color="azure" style={{ opacity: 0.9 }} />
      </IconButton>
      <img src={pfp} alt="pfp" className="pfp" />
    </header>
  );
};

export default Header;
