import Body from "@layout/Body";
import { Box } from "@mui/material";
import { IoSearchOutline } from "react-icons/io5";
import "./index.css";

const Search = () => {
  return (
    <Body title="Search">
      <Box className="search-container">
        <Box className="search-box-container">
          <IoSearchOutline size={20} />
          <input type="text" placeholder="Search classes or students..." />
        </Box>
        <Box className="search-box-container"></Box>
      </Box>
    </Body>
  );
};

export default Search;
