import React from "react";
import classNames from 'classnames'

const Button = ({ text, onClick, disabled }) => {

  console.log('disabled?', disabled)
  return (
    <button onClick={onClick} className={classNames("buttonBase", {disabled: disabled})} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;
