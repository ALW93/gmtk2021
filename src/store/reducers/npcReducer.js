const LOAD_NPCS = 'LOAD_NPCS';

export const loadNPCsAction = data => ({
    type:LOAD_NPCS,
    data
})

export default (state=[], action) => {
    switch(action.type) {
        case LOAD_NPCS: {
            return action.data;
        }
        default: {
            return state
        }
    }
}