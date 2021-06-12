import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import NPCDialogue from "./NPCDialogue";
import {loadNPCs} from '../store/actions/npcAction'

const NPC = () => {
    const dispatch = useDispatch();
    const npcs = useSelector(state => state.npc);

    useEffect(() => {
        dispatch(loadNPCs())
    }, [])

    return (
        npcs.map(npc => (
        <div>
            <h1>{npc.name}</h1>
            <NPCDialogue />
        </div>
        ))
    )
};

export default NPC;