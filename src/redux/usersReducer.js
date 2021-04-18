import { GET_USERS, SET_CURRENT_PAGE, SET_USER, SET_UPDATED_USER } from './types';

const initialState = {
  users: [],
  currentPage: 1,
};


function updateUser(users,payload){
  const index = users.findIndex(u => u.id === payload.id)
  users.splice(index, 1, payload);
  return [...users]
}

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return { ...state, users: action.payload };
    case SET_USER:
      return { ...state, users: [...state.users, action.payload] };
    case SET_UPDATED_USER:
      return { ...state, users: updateUser([...state.users], action.payload) };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.payload };
    default:
      return state;
  }
};
