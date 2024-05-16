import React from "react";
import StudyStatistics from "../StudyStatistics/StudyStatistics";
import Updates from "../Updates/Updates";
import "./RightSide.css";

const RightSide = () => {
  return (
    <div className="RightSide">
      <div>
        <h3>Upcoming Classes</h3>
        <Updates />
      </div>
      <div>
        <h3>Study Statistics</h3>
        <StudyStatistics />
      </div>
    </div>
  );
};

export default RightSide;
