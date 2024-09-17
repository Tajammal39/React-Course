import React from "react";
import style from "./FoodCard.module.css";
import { BASE_URL } from "../../App";
const FoodCard = ({ data }) => {
  return (
    <div className={style.food_container}>
      {data.map(({ name, image, text, price }) => (
        <div className={style.food_card} key={name}>
          <div>
            <img src={BASE_URL + image} alt="" />
          </div>
          <div className={style.food_info}>
            <div className={style.info}>
              <h1>{name}</h1>
              <p>{text}</p>
            </div>
            <div>
              <p>%{price.toFixed(2)}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FoodCard;
