import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import NPCDialogue from "./NPCDialogue";
import {loadNPCs} from '../store/actions/npcAction'

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
            <h3 className="name">{npc?.name}</h3>
            <img src={`/images/npcs/${npc?.id}`}/>
            <NPCDialogue intro={npc?.intro}/>
            <div className="footer">Potion Matching Game ©</div>
        </div>
    )
};

export default NPC;