import React from "react";
import Workbench from "./Workbench";
import NPC from './NPC';

const Game = (props) => {
  return (
    <div className="Game">
      <div>
        <Workbench />
      </div>
      <div>
        <h1>Potion Matching Game</h1>
        <NPC />
      </div>
      <div>
        <p>Right column</p>
      </div>
    </div>
  );
};

export default Game;
