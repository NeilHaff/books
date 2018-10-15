
import * as types from './types'



export const toggleView = (id) => {
    return {
        type: types.TOGGLE_VIEWED,
        payload: {id:id}
    }
}
