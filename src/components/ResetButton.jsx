import React from "react";
const ResetButton = ({ onClick }) => {
  return (
    <button className="resetBtn" onClick={onClick}>
      Reset
    </button>
  );
};

export default ResetButton;
