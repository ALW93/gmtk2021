import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Workbench from "./Workbench";
import NPC from "./NPC";
import Discovery from "./Discovery";
import { loadAllActive } from "../store/reducers/activeReducer";
import { getRandomNpc } from "../utility/utility";
import { loadSaveData } from "../store/reducers/saveReducer";

const Game = (props) => {
  const dispatch = useDispatch();
  const npcs = useSelector((state) => state.npcs);

  useEffect(() => {
    const randomNpcId = getRandomNpc(npcs);
    const initialActive = {
      npc: randomNpcId,
      ailment: npcs[randomNpcId].ailment,
      ingredients: [],
      potion: "",
    };
    dispatch(loadAllActive(initialActive));
  }, []);

  useEffect(() => {
    // window.onbeforeunload = confirmExit;
    // function confirmExit() {
    //   return "show warning";
    // }
    loadSaveData();
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
