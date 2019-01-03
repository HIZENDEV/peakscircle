import { combineReducers } from 'redux'

const INITIAL_STATE = {
  current: [],
  possible: [
    'Allie',
    'Gator',
    'Lizzie',
    'Raptor',
  ],
}

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default combineReducers({
  user: authReducer,
})