import React from "react";
import Workbench from "./Workbench";
import NPC from './NPC';

const Game = (props) => {
  return (
    <div>
      <h1>Potion Matching Game</h1>
        <Workbench />
        <NPC />
    </div>
  );
};

export default Game;
