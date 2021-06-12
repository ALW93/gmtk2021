import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { loadAllActive } from "../store/reducers/activeReducer";
import { getRandomNpc } from "../utility/utility";

import Workbench from "./Workbench";
import NPC from "./NPC";
import Discovery from "./Discovery";
import { loadSaveData } from "../store/reducers/saveReducer";
import GameOptions from "./GameOptions/GameOptions";

const Game = ({ musicPlaying, setMusicPlaying }) => {
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
        <NPC />
      </main>
      <aside>
        <GameOptions
          musicPlaying={musicPlaying}
          setMusicPlaying={setMusicPlaying}
        />
        <Workbench />
      </aside>
    </div>
  );
};

export default Game;
