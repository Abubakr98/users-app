import { REQUEST_USERS, SET_CURRENT_PAGE, SET_USERS } from './types';

export function fetchUsers() {
  return {
    type: REQUEST_USERS,
  };
}
export function setUsers(data) {
  return {
    type: SET_USERS,
    payload: data
  };
}
export function setCurrentPage(page) {
  return {
    type: SET_CURRENT_PAGE,
    payload: page,
  };
}
