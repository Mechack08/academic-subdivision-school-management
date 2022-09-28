import React from "react";
import { useState } from "react";
import Commune from "../commune";
import Leader from "../leader";
import Quarter from "../quarter";
import Year from "../year";
import "./settings.css";

const Settings = () => {
  const [showAddConfigs, setShowAddConfigs] = useState({
    leader: true,
    year: false,
    commune: false,
    quarter: false,
  });

  return (
    <div className="settings-container">
      <div className="config-btn">
        <h1 className="right-title">Configurations</h1>
        <div className="btns">
          <div className="btn">
            <button
              className={showAddConfigs.leader ? "active" : ""}
              onClick={() =>
                showAddConfigs.leader
                  ? setShowAddConfigs({ leader: false })
                  : setShowAddConfigs({ leader: true })
              }
            >
              Nouveau Dirigeant
            </button>
          </div>
          <div className="btn">
            <button
              className={showAddConfigs.year ? "active" : ""}
              onClick={() =>
                showAddConfigs.year
                  ? setShowAddConfigs({ year: false })
                  : setShowAddConfigs({ year: true })
              }
            >
              Nouvelle Annee Scolaire
            </button>
          </div>
          <div className="btn">
            <button
              className={showAddConfigs.commune ? "active" : ""}
              onClick={() =>
                showAddConfigs.commune
                  ? setShowAddConfigs({ commune: false })
                  : setShowAddConfigs({ commune: true })
              }
            >
              Nouvelle Commune
            </button>
          </div>
          <div className="btn">
            <button
              className={showAddConfigs.quarter ? "active" : ""}
              onClick={() =>
                showAddConfigs.quarter
                  ? setShowAddConfigs({ quarter: false })
                  : setShowAddConfigs({ quarter: true })
              }
            >
              Nouveau Quartier
            </button>
          </div>
        </div>
      </div>
      {showAddConfigs.leader && (
        <div className="config-display">
          <Leader />
        </div>
      )}
      {showAddConfigs.year && (
        <div className="config-display">
          <Year />
        </div>
      )}
      {showAddConfigs.commune && (
        <div className="config-display">
          <Commune />
        </div>
      )}
      {showAddConfigs.quarter && (
        <div className="config-display">
          <Quarter />
        </div>
      )}
    </div>
  );
};

export default Settings;
