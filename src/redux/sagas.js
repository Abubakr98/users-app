import { takeEvery, put, call } from 'redux-saga/effects';
import { GET_USERS, REQUEST_USERS } from './types';
import api from '../api';

export function* sagaWatcher() {
  yield takeEvery(REQUEST_USERS, getUsers);
}

function* getUsers() {
  try {
    const payload = yield call(fetchUsers);
    yield put({ type: GET_USERS, payload });
  } catch (e) {
    yield put(console.log('Что-то пошло не так', e.message));
  }
}

async function fetchUsers() {
  const response = await fetch(api.USERS);
  return await response.json();
}
