import styles from "./App.module.css";
import Display from "./components/Display";
import CalBtn from "./components/CalBtn";
import { useState } from "react";
function App() {
  let calculator = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  let [calVal, setCalValue] = useState("");

  const onButtonClick = (buttonText) => {
    calVal = "";
    if (buttonText === "C") {
      setCalValue("");
    } else if (buttonText === "=") {
      setCalValue(eval(calVal));
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalValue(newDisplayValue);
    }
  };

  return (
    <div className={styles.calculator}>
      <Display displayValue={calVal} />
      <CalBtn calbtn={calculator} onButtonClick={onButtonClick} />
    </div>
  );
}
export default App;
