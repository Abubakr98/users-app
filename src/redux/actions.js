import { REQUEST_USERS, SET_CURRENT_PAGE, SET_USER, SET_UPDATED_USER } from './types';

export function fetchUsers() {
  return {
    type: REQUEST_USERS,
  };
}
export function setUser(data) {
  return {
    type: SET_USER,
    payload: data
  };
}
export function setUpdatedUser(data) {
  return {
    type: SET_UPDATED_USER,
    payload: data
  };
}
export function setCurrentPage(page) {
  return {
    type: SET_CURRENT_PAGE,
    payload: page,
  };
}
