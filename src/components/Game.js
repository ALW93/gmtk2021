import React from "react";
import Workbench from "./Workbench";
import NPC from "./NPC";

const Game = (props) => {
  return (
    <div className="GameContainer grid">
        <aside>
          <Workbench />
        </aside>
        <main className="main">
          <h1 class="title">Potion Matching Game</h1>
          <NPC />
        </main>
        <aside>
          <p>Right column</p>
        </aside>
    </div>
  );
};

export default Game;
