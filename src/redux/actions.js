import { REQUEST_USERS } from './types';

export function fetchUsers() {
  return {
    type: REQUEST_USERS,
  };
}
