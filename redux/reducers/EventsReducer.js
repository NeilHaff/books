import * as types from '../actions/types'

const INITIAL_STATE = {
    bought: {}
}


const EventsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.TOGGLE_EVENT:
            return {
                ...state,
                bought: {
                    ...state.bought,
                    [action.payload.id]:!state.bought[action.payload.id]
                }
            }
        default:
            return state
    }
}


export default EventsReducer
