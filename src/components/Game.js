import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Workbench from "./Workbench";
import NPC from "./NPC";
import Discovery from "./Discovery";
import { loadAllActive } from "../store/reducers/activeReducer";
import { getRandomNpc } from "../utility/utility";

const Game = (props) => {
  const dispatch = useDispatch();
  const npcs = useSelector(state => state.npcs)
  
  useEffect(() => {
const randomNpc = getRandomNpc(npcs)
    const initialActive = {
      npc: randomNpc.id,
      ailment: randomNpc.ailment,
      ingredients: [],
      potion: {},
    }
    dispatch(loadAllActive(initialActive))
  }, [])

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
