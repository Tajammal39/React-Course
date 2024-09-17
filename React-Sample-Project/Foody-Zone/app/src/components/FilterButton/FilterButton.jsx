import React from "react";
import style from "./FilterButton.module.css";
const FilterButton = ({ filterFood }) => {
  const btnName = ["All", "Breakfast", "Lunch", "Dinner"];
  return (
    <div className={style.filter_btn}>
      {btnName.map((index) => (
        <button key={index} onClick={() => filterFood(index)}>
          {index}
        </button>
      ))}
    </div>
  );
};

export default FilterButton;
