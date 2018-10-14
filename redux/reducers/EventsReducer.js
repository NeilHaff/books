import * as types from '../actions/types'

const INITIAL_STATE = {
    attendance: {}
}


const EventsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.TOGGLE_EVENT:
            return {
                ...state,
                attendance: {
                    ...state.attendance,
                    [action.payload.id]:!state.attendance[action.payload.id]
                }
            }
        default:
            return state
    }
}


export default EventsReducer
