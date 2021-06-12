import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import NPCDialogue from "./NPCDialogue";
import {loadNPCs} from '../store/actions/npcAction'
import image from '../images/npcs/ghosty.png'

const NPC = () => {
    const dispatch = useDispatch();
    const npcs = useSelector(state => state.npc);

    const npcIndex = Math.floor(Math.random() * npcs.length);
    const npc = npcs[npcIndex];

    useEffect(() => {
        dispatch(loadNPCs())
    }, [])

    return (
        <div className="Npc">
            <div className="imageContainer">
                <img src={image} alt="ghosty" />
            </div>
            <h3 className="name">{npc?.name}</h3>
            <NPCDialogue intro={npc?.intro}/>
            <div className="footer">Potion Matching Game ©</div>
        </div>
    )
};

export default NPC;