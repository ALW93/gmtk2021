import React from "react";
import Workbench from "./Workbench";
import "./Game.scss";

const Game = (props) => {
  return (
    <div className="GameContainer">
      <h1>Potion Matching Game</h1>
      <Workbench />
    </div>
  );
};

export default Game;
