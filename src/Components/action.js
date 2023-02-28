import * as actions from '../actionType'

export const update_infos = (val) => {
    return{
        type: actions.UPDATE,
        payload: val
    }
}