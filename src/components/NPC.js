import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import NPCDialogue from "./NPCDialogue";
import images from "../images/images";

const NPC = () => {
  const {npcs, ailments} = useSelector(state => state);
  const potionId = useSelector((state) => state.active.potion);
  const npcId = useSelector(state => state.active.npc)
  const [npc, setNpc] = useState(npcs[npcId])
  const [isMatchingPotion, setIsMatchingPotion] = useState(false);
  const [dialogue, setDialogue] = useState("");

  useEffect(() => {
    // let ailmentWhichSelectedPotionCures;
    // Object.values(ailments).forEach(ailment => {
    //     if (ailment.cure === potionId) {
    //         ailmentWhichSelectedPotionCures = ailment.id;
    //     }
    // })
    console.log('ailments', ailments, npc)

    if (potionId && potionId === ailments[npc.ailment].cure) {
        setIsMatchingPotion(true);
    }
  }, [potionId, npc, ailments]);

  useEffect(() => {
    if (potionId) {
      setDialogue(isMatchingPotion ? npc?.success : npc?.failure);
    } else {
      setDialogue(npc?.intro);
    }
  }, [npc, isMatchingPotion, potionId]);

    useEffect(() => {
      console.log('hellooo', npcId, npc)
      setNpc(npcs[npcId])
    }, [npcId])

  if (!npc) return null; 

  return (
    <div className="Npc">
      <div className="imageContainer">
        <img src={images[npc.id]} alt={npc.name} />
      </div>
      <NPCDialogue body={dialogue} name={npc.name} />
    </div>
  );
};

export default NPC;
