import React from "react";
import Workbench from "./Workbench";
import NPC from "./NPC";
import Discovery from "./Discovery";

const Game = (props) => {
  return (
    <div className="GameContainer grid">
      <aside>
        <Discovery />
      </aside>
      <main className="main">
        <h1 className="title">Potion Matching Game</h1>
        <NPC />
      </main>
      <aside>
        <Workbench />
      </aside>
    </div>
  );
};

export default Game;
