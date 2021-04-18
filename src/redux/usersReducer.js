import { GET_USERS, SET_CURRENT_PAGE, SET_USERS } from './types'

const initialState = {
  users: [],
  currentPage: 1
}

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return { ...state, users: action.payload }
    case SET_USERS:
      return { ...state, users: [...state.users, action.payload] }
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.payload }
    default: return state
  }
}