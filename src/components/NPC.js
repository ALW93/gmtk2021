import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import NPCDialogue from "./NPCDialogue";
import images from "../images/images";

const NPC = () => {
  const potionId = useSelector((state) => state.active?.potion?.id);
  const ailments = useSelector(state => state.ailments);
  const npc = useSelector(state => state.npcs[state.active.npc])
  const [isMatchingPotion, setIsMatchingPotion] = useState(false);
  const [dialogue, setDialogue] = useState('');

  useEffect(() => {
      let ailmentWhichSelectedPotionCures;
      Object.values(ailments).forEach(ailment => {
          if (ailment.cure === potionId) {
              ailmentWhichSelectedPotionCures = ailment.id;
          }
      })

      if (potionId && ailmentWhichSelectedPotionCures === npc.ailment) {
          setIsMatchingPotion(true);
      }
  }, [potionId])

    useEffect(() => {
      console.log('npc change?', npc)
        if (potionId) {
            setDialogue(isMatchingPotion ? npc?.success : npc?.failure)
        } else {
            setDialogue(npc?.intro);
        }
    }, [npc, isMatchingPotion, potionId])

  if (!npc) return null; 
  return (
    <div className="Npc">
      <div className="imageContainer">
        <img src={images[npc.id]} alt={npc.name} />
      </div>
      <h3 className="name">{npc.name}</h3>
      <NPCDialogue body={dialogue} />
      <div className="footer">Potion Matching Game ©</div>
    </div>
  );
};

export default NPC;
