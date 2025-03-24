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

function App() {
  const isAuth = true;

  return (
    <Router>
      {isAuth ? (
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
