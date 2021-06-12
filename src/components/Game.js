import React from "react";
import Workbench from "./Workbench";
import NPC from "./NPC";

const Game = (props) => {
  return (
    <div className="GameContainer">
        <aside>
          <Workbench />
        </aside>
        <main className="main">
          <h1>Potion Matching Game</h1>
          <NPC />
        </main>
        <aside>
          <p>Right column</p>
        </aside>
    </div>
  );
};

export default Game;
