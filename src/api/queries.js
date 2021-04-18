import axios from 'axios';
import api from './index';

export async function post(data) {
  try {
    const response = await axios.post(api.USERS, data);
    return await response.data;
  } catch (e) {
    console.log(console.log('Что-то пошло не так', e.message));
  }
}

export async function put(id, data) {
  try {
    const response = await axios.put(`${api.USER}/${id}`, data);
    return await response.data;
  } catch (e) {
    console.log(console.log('Что-то пошло не так', e.message));
  }
}

export async function deleteUser(id) {
  try {
    const response = await axios.delete(`${api.USER}/${id}`);
    return await response.data;
  } catch (e) {
    console.log(console.log('Что-то пошло не так', e.message));
  }
}

export async function getUser(id) {
  try {
    const response = await axios.get(`${api.USER}/${id}`);
    return await response.data;
  } catch (e) {
    console.log(console.log('Что-то пошло не так', e.message));
  }
}
