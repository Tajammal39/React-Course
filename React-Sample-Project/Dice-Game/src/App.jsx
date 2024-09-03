import React, { useState } from "react";
import StartGame from "./components/StartGame";
import "./App.css";
import RollDice from "./components/RollDice";
const App = () => {
  const [page, setPage] = useState(1);

  const handlePlayNowClick = () => {
    console.log("startGame");
    setPage(2);
  };

  if (page === 1) {
    return <StartGame playNow={handlePlayNowClick} />;
  } else if (page === 2) {
    return <RollDice />;
  }
};

export default App;
