import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import NPCPortrait from "./NPCPortrait";
import NPCDialogue from "./NPCDialogue";
import Line from "./svgs/Line";
import {clearAllActive, clearIngredients, clearPotion, updateNpc} from "../store/reducers/activeReducer";
import {getRandomNpc} from "../utility/utility";
import {updateSaveLog} from "../store/actions/potionsActions";

const NPC = () => {
  const dispatch = useDispatch();
  const { npcs, ailments } = useSelector((state) => state);
  const potions = useSelector((state) => state.potions);
  const activePotion = useSelector((state) => state.active.potion);
  const npcId = useSelector((state) => state.active.npc);
  const [npc, setNpc] = useState(npcs[npcId]);
  const [isMatchingPotion, setIsMatchingPotion] = useState(false);
  const [dialogue, setDialogue] = useState("");
  const [reaction, setReaction] = useState("standard");

  useEffect(() => {
    if (activePotion && activePotion === ailments[npc.ailment].cure) {
      setIsMatchingPotion(true);
    }
  }, [activePotion, npc, ailments, npcId]);

  useEffect(() => {
    if (activePotion) {
      setDialogue(isMatchingPotion ? npc?.success : npc?.failure);
      setReaction(isMatchingPotion ? "happy" : "standard");
    } else {
      setDialogue(npc?.intro);
    }
  }, [npc, isMatchingPotion, activePotion, npcId]);

  useEffect(() => {
    if (activePotion !== 'smelly-potion') {
      dispatch(updateSaveLog({npc: npcs[npc?.id]}));
    }
  }, [activePotion])

  useEffect(() => {
    const girl = npcs[npcId];
    setNpc(girl);
    setReaction("standard");
  }, [npcId, npcs]);

  if (!npc) return null;

  const updateDialogue = () => {
    if (isMatchingPotion) {
      dispatch(clearAllActive())
      dispatch(updateNpc(getRandomNpc(npcs)))
      setIsMatchingPotion(false)
    } else {
      dispatch(clearIngredients());
      dispatch(clearPotion());
      setDialogue(npc?.intro)
    }
  }

  return (
    <div className="Npc">
      <Line />
      <div className="imageContainer">
        <NPCPortrait id={npc.id} mode={reaction} />
        <NPCDialogue body={dialogue} name={npc.name} updateDialogue={updateDialogue} />
      </div>
      <Line />
    </div>
  );
};

export default NPC;
