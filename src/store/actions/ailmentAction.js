import {loadAilmentsAction} from '../reducers/ailmentReducer'
import {ailments} from '../../data/data'

export const loadAilments = () => {
    return dispatch => {
        return dispatch(loadAilmentsAction(ailments));
    }
}
