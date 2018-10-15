import { combineReducers } from 'redux'

import EventsReducer from './EventsReducer'
import ViewedReducer from './ViewedReducer'

export default combineReducers ({

  events    : EventsReducer,
  views     : ViewedReducer,
})


