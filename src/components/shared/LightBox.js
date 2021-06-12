import React from "react";

const LightBox = ({ onClick, title }) => {
  return (
    <div className="lightBoxContainer--Outer">
      <div className="lightBoxContainer--Inner" onClick={onClick}>
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default LightBox;
