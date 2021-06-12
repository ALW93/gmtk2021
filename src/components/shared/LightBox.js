import React from "react";

const LightBox = ({ onClick, children }) => {
  return (
    <div className="lightBoxContainer--Outer">
      <div className="lightBoxContainer--Inner" onClick={onClick}>
        {children}
      </div>
    </div>
  );
};

export default LightBox;
