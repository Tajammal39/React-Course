import React from "react";
import style from "./ShowRules.module.css";
const ShowRules = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: 64 }}>
      <div className={style.game_rule}>
        <p style={{ fontSize: 24, fontWeight: "bold" }}>
          How to play dice game
        </p>
        <p style={{ fontSize: 16, fontWeight: 500 }}>
          Select any number <br />
          Click on dice image <br />
          after click on dice if selected number is equal to dice number you
          will get same point as dice <br />
          if you get wrong guess then 2 point will be dedcuted{" "}
        </p>
      </div>
    </div>
  );
  s;
};

export default ShowRules;
