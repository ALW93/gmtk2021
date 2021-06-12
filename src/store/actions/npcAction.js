import {loadNPCsAction} from '../reducers/npcReducer'
import {npc} from '../../data/data'

export const loadNPCs = () => {
    return dispatch => {
        return dispatch(loadNPCsAction(npc));
    }
}
