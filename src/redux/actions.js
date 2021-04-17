import { REQUEST_USERS, SET_CURRENT_PAGE } from './types';

export function fetchUsers() {
  return {
    type: REQUEST_USERS,
  };
}
export function setCurrentPage(page) {
  return {
    type: SET_CURRENT_PAGE,
    payload: page,
  };
}
