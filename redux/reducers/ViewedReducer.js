import * as types from '../actions/types'

const INITIAL_STATE = {
    viewed: {}
}


const ViewedReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.TOGGLE_VIEWED:
            return {
                ...state,
                viewed: {
                    ...state.viewed,
                    [action.payload.id]:!state.viewed[action.payload.id]
                }
            }
        default:
            return state
    }
}


export default ViewedReducer
