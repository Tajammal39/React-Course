import React from "react";
import style from "./Button.module.css";
const Button = ({ isOutline, ...rest }) => {
  const { icon, text } = { ...rest };
  return (
    <button
      className={isOutline ? style.outline_btn : style.primary_btn}
      {...rest}
    >
      {icon}
      {text}
    </button>
  );
};
export default Button;
