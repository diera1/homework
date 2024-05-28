import React from "react";
const ClickButton = ({ onClick }) => {
  return (
    <button className="clickBtn" onClick={onClick}>
      Click me!
    </button>
  );
};

export default ClickButton;
