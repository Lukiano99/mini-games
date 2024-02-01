import React from "react";
import { useSelector } from "react-redux";
const ProgressBar = () => {
  const levels = useSelector((state) => state.levels);

  return (
    <div className="progressBar">
      {levels.map((level) => (
        <div
          key={level.id}
          className="level-indicator"
          style={{
            backgroundColor: level.status === "success" ? "#2ecc71" : "#3a3a3ac7",
          }}
        ></div>
      ))}
    </div>
  );
};

export default ProgressBar;
