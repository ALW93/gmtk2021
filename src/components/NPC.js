import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import NPCDialogue from "./NPCDialogue";
import { loadNPCs } from "../store/reducers/npcsReducer";
import images from "../images/images";

const NPC = () => {
  const dispatch = useDispatch();
  const npcs = useSelector((state) => state.npcs);
  const potionId = useSelector((state) => state.active?.potion?.id);
  const ailments = useSelector(state => state.ailments);
  const [isMatchingPotion, setIsMatchingPotion] = useState(false);
  const [npc, setNpc] = useState({});
  const [dialogue, setDialogue] = useState('');

  useEffect(() => {
      let ailmentWhichSelectedPotionCures;
      ailments.forEach(ailment => {
          if (ailment.cure === potionId) {
              ailmentWhichSelectedPotionCures = ailment.id;
          }
      })

      if (potionId && ailmentWhichSelectedPotionCures === npc.ailment) {
          setIsMatchingPotion(true);
      }
  }, [potionId])

    useEffect(() => {
        if (potionId) {
            setDialogue(isMatchingPotion ? npc?.success : npc?.failure)
        } else {
            setDialogue(npc?.intro);
        }
    }, [npc, isMatchingPotion, potionId])

    useEffect(() => {
        const npcIndex = Math.floor(Math.random() * npcs.length);
        setNpc(npcs[npcIndex]);
    }, [npcs])

  return (
    <div className="Npc">
      <div className="imageContainer">
        <img src={images[npc?.id]} alt={npc?.name} />
      </div>
      <h3 className="name">{npc?.name}</h3>
      <NPCDialogue body={dialogue} />
      <div className="footer">Potion Matching Game ©</div>
    </div>
  );
};

export default NPC;
