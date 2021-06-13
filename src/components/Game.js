import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { loadAllActive } from "../store/reducers/activeReducer";
import { getRandomNpc } from "../utility/utility";

import Workbench from "./Workbench";
import NPC from "./NPC";
import Discovery from "./Discovery";
import { loadRecipeBook, loadResolvedNpcs } from "../store/reducers/saveReducer";
import GameOptions from "./GameOptions/GameOptions";
import Ingredients from "./Ingredients";

const Game = ({ musicPlaying, setMusicPlaying }) => {
  const dispatch = useDispatch();
  const npcs = useSelector((state) => state.npcs);
  const [openDiscovery, setOpenDiscovery] = useState(false)

  useEffect(() => {
    const randomNpcId = getRandomNpc(npcs);
    const initialActive = {
      npc: randomNpcId,
      ailment: npcs[randomNpcId].ailment,
      ingredients: [],
      potion: "",
    };
    dispatch(loadAllActive(initialActive));
  }, [dispatch, npcs]);

  useEffect(() => {
    // window.onbeforeunload = confirmExit;
    // function confirmExit() {
    //   return "show warning";
    // }
    loadRecipeBook();
    loadResolvedNpcs();
  }, []);

  return (
    <div className="GameContainer grid">
      <aside>
        <Discovery open={openDiscovery} setOpen={setOpenDiscovery} />
        <Ingredients addSelection={()=>console.log("eh")} />
      </aside>
      <main className="main">
        <NPC />
      </main>
      <aside>
        <GameOptions />
        <Workbench setOpenDiscovery={setOpenDiscovery} />
      </aside>
    </div>
  );
};

export default Game;

{/* <a href='https://www.freepik.com/vectors/book'>Book vector created by upklyak - www.freepik.com</a> */}