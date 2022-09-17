import Home from "./pages/Home";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Asidebar from "./components/Asidebar";

function App() {
  return (
    <div className="app-container">
      <div className="asidebar">
        <Asidebar />
      </div>
      <div className="right-side">
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
