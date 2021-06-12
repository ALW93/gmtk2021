import React, { useEffect } from "react";
import Workbench from "./Workbench";
import NPC from "./NPC";
import Discovery from "./Discovery";
import { loadSaveData } from "../store/reducers/saveReducer";

const Game = (props) => {
  useEffect(() => {
    // window.onbeforeunload = confirmExit;
    // function confirmExit() {
    //   return "show warning";
    // }
    console.log(loadSaveData());
  }, []);

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
