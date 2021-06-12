import React from "react";

const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className="buttonBase">
      {text}
    </button>
  );
};

export default Button;
