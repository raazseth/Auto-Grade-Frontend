import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "@pages/NotFound";
import Dashboard from "@pages/Dashboard/Dashboard";
import Search from "@pages/Search/Search";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/search" element={<Search />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
