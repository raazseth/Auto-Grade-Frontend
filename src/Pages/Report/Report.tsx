import Body from "@layout/Body";
import { useLocation } from "react-router-dom";

const Report = () => {
  const location = useLocation();
  const data = location.state;
  return <Body title="Report">Report</Body>;
};

export default Report;
