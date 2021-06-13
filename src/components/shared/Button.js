import React from "react";
import classNames from 'classnames'

const Button = ({ text, onClick, disabled }) => {

  return (
    <button onClick={onClick} className={classNames("buttonBase", {disabled: disabled})} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;
