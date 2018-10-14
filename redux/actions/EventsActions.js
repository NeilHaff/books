
import { Actions } from 'react-native-router-flux'
import * as types from './types'



export const toggleEvent = (id) => {
    return {
        type: types.TOGGLE_EVENT,
        payload: {id:id}
    }
}
