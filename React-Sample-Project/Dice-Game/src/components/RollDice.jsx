import React from "react";
import style from "./RollDice.module.css";
import Button from "./Button";
import ShowRules from "./ShowRules";
import { useState } from "react";

const RollDice = () => {
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [diceNumber, setDiceNumber] = useState(1);
  const [diceScore, setDicescore] = useState(0);
  const [showError, setError] = useState(false);
  // const [isSelected, setSelected] = useState(false);
  // States to track if Reset or Show Rules buttons are selected
  const [isResetSelected, setIsResetSelected] = useState(false);
  const [isRulesSelected, setIsRulesSelected] = useState(false);

  // const [showRule, setShowRule] = useState(false);

  const button = [1, 2, 3, 4, 5, 6];

  const handleSelectNumber = (number) => {
    setSelectedNumber(number);
    setError(false);
    // setSelected((isSelected) => !isSelected);
  };

  const setResetBtn = () => {
    setDicescore(0);
    setIsResetSelected((isResetSelected) => !isResetSelected);
  };

  const setGameRule = () => {
    console.log("set Game rule");
    setIsRulesSelected((isRulesSelected) => !isRulesSelected);
    is;
  };

  const handleError = () => {
    setError(true);
  };

  const DiceRoll = () => {
    if (selectedNumber != null) {
      let number = Math.floor(Math.random() * 6 + 1);
      setDiceNumber(number);
      if (selectedNumber === number) {
        setDicescore((diceScore) => diceScore + number);
      } else {
        setDicescore((diceScore) => diceScore - 2);
        setSelectedNumber(undefined);
      }
    } else {
      handleError();
    }
  };

  return (
    <div className={style.dice_roll_container}>
      {showError && (
        <p className={style.select_no}>You have not selected any number</p>
      )}
      <div className={style.dice_header}>
        <div className={style.dice_score}>
          <h1>{diceScore}</h1>
          <p>Total Score</p>
        </div>

        <div className={style.dice_number_btn}>
          <div>
            {button.map((number) => (
              <Button
                key={number}
                title={number}
                setSelectedNumber={() => handleSelectNumber(number)}
                isSelected={selectedNumber === number}
              />
            ))}
          </div>
          <p>Select Number</p>
        </div>
      </div>
      <div className={style.dice_img}>
        <div>
          <img
            src={`./dice_${diceNumber}.png`}
            alt=""
            onClick={() => DiceRoll()}
          />
          <p style={{ textAlign: "center", fontWeight: 600, fontSize: 20 }}>
            Click on Dice to roll
          </p>
        </div>
        <div className={style.dice_btn}>
          <Button
            title="Reset Score"
            handleResetBtn={() => setResetBtn()}
            isSelected={isResetSelected}
          />
          <Button
            title="Show Rules"
            handleGameRule={() => setGameRule()}
            isSelected={isRulesSelected}
          />
        </div>
      </div>
      {/* how to play game */}

      {isRulesSelected && <ShowRules />}
    </div>
  );
};

export default RollDice;
