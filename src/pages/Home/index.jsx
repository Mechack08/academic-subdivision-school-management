import React, { useEffect, useState } from "react";
import "./home.css";
import Navbar from "../../components/Navbar";
import Asidebar from "../../components/Asidebar";
import HighLight from "../../components/highLight";
import TopSchools from "../../components/topSchools";
import Popup from "../../components/popup";
import { schools } from "../../data";

const Home = () => {
  const [showPopUp, setShowPopUp] = useState(false);
  const [getSchool, setGetSchool] = useState([]);

  // toggle popup
  const showModal = () => {
    setShowPopUp(true);
  };

  // get A school by it's ID
  const getOneSchool = (id) => {
    setGetSchool(schools.filter((s) => s.id === id));
  };

  return (
    <div className="home-container">
      {showPopUp && (
        <div className="popup-container show">
          <Popup closeModal={setShowPopUp} school={getSchool} />
        </div>
      )}

      <div className="principal">
        <Navbar />
        <div className="main">
          <HighLight />
          <TopSchools showModal={showModal} getOneSchool={getOneSchool} />
        </div>
      </div>
    </div>
  );
};

export default Home;
