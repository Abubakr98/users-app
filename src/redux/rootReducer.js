import {combineReducers} from 'redux'
import {usersReducer} from './usersReducer'
import {appReducer} from './appReducer'

export const rootReducer = combineReducers({
  users: usersReducer,
  app: appReducer
})