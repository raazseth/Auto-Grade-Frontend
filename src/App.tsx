import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "@pages/NotFound";
import Dashboard from "@pages/Dashboard/Dashboard";
import Search from "@pages/Search/Search";
import Classes from "@pages/Classes/Classes";
import Assignment from "@pages/Assignment/Assignment";
import Report from "@pages/Report/Report";
import Profile from "@pages/Profile/Profile";
import Settings from "@pages/Settings/Settings";
import Auth from "@pages/Auth/Auth";
import useAuth from "@utils/useAuth";
import useGlobalState from "@utils/useGlobalState";

function App() {
  const [isAuthorized, setisAuthorized] = useState(
    localStorage.getItem("isAuth") === "true"
  );
  const { setAuth, isAuthenticated } = useAuth();
  const { state, dispatch } = useGlobalState();

  const handleAuth = () => {
    const accessKey = prompt("Enter the access key to proceed:");
    if (accessKey.toLocaleLowerCase() === "hashout") {
      setisAuthorized(true);
      localStorage.setItem("isAuth", "true");
    } else {
      alert("Invalid key! Access denied.");
      setisAuthorized(false);
      localStorage.removeItem("isAuth");
    }
  };

  // useEffect(() => {
  //   if (!isAuthorized) handleAuth();
  // }, [isAuthorized]);

  useEffect(() => {
    if (!isAuthenticated) {
      setAuth();
      const classData = localStorage.getItem("COURSE");
      dispatch({
        type: "SET_COURSE",
        payload: JSON.parse(classData),
      });
    }
  }, [isAuthenticated]);

  return (
    <Router>
      {state.isAuthenticated ? (
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/search" element={<Search />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/assignment" element={<Assignment />} />
          <Route path="/report" element={<Report />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="*" element={<Auth />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
