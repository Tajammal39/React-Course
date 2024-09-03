import React from "react";
import style from "../components/startGame.module.css";
const StartGame = ({ playNow }) => {
  return (
    <div className={style.startGame}>
      <div className={style.gameImg}>
        <img src="dices.png" alt="" />
      </div>
      <div className={style.gameText}>
        <h1>DICE GAME</h1>
        <button onClick={playNow}>Play Now</button>
      </div>
    </div>
  );
};

export default StartGame;
