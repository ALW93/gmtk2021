import React from "react";

const LightBox = ({ onClick }) => {
  return (
    <div className="lightBoxContainer--Outer">
      <div className="lightBoxContainer--Inner" onClick={onClick}>
        <h1>Recipes</h1>
      </div>
    </div>
  );
};

export default LightBox;
