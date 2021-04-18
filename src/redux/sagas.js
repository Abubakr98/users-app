import { takeEvery, put, call } from 'redux-saga/effects';
import axios from 'axios'
import { GET_USERS, REQUEST_USERS } from './types';
import api from '../api';
import {hideLoader, showLoader} from './actions'

export function* sagaWatcher() {
  yield takeEvery(REQUEST_USERS, getUsers);
}

function* getUsers() {
  try {
    yield put(showLoader())
    const payload = yield call(fetchUsers);
    yield put({ type: GET_USERS, payload });
    yield put(hideLoader())
  } catch (e) {
    yield put(console.log('Что-то пошло не так', e.message));
    yield put(hideLoader())
  }
}

async function fetchUsers() {
  const response = await axios.get(api.USERS);
  return await response.data;
}
