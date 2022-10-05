import Home from "./pages/Home";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Asidebar from "./components/Asidebar";
import School from "./components/school";
import { useLocation } from "react-router-dom";
import Student from "./components/student";
import Settings from "./components/settings";
import LoginLogout from "./pages/loginLogout";
import RealSchool from "./components/realSchool";
import SchoolStudents from "./components/schoolStudents";

function App() {
  const location = useLocation().pathname;

  return (
    <div className="app-container">
      <div className="asidebar">
        <Asidebar location={location} />
      </div>
      <div className="right-side">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/ecoles" element={<School />}></Route>
          <Route path="/eleves" element={<Student />}></Route>
          <Route path="/parametres" element={<Settings />}></Route>
          <Route path="/login" element={<LoginLogout />}></Route>
          <Route path="/ecole" element={<RealSchool />}></Route>
          <Route path="/ecole/eleves" element={<SchoolStudents />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
