import React from "react";
import style from "./Button.module.css";

const Button = ({
  title,
  isSelected,
  setSelectedNumber,
  handleGameRule,
  handleResetBtn,
}) => {
  return (
    <button
      onClick={setSelectedNumber || handleGameRule || handleResetBtn}
      style={{
        backgroundColor: isSelected ? "black" : "white",
        color: isSelected ? "white" : "black",
      }}
      className={style.button}
    >
      {title}
    </button>
  );
};

export default Button;
