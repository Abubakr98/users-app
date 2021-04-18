import api from './index';

export async function post(data) {
  const response = await fetch(api.USERS, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return await response.json();
}

export async function put(id, data) {
  const response = await fetch(`${api.USER}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return await response.json();
}

export async function getUser(id) {
    const response = await fetch(`${api.USER}/${id}`);
    return await response.json();
  }
