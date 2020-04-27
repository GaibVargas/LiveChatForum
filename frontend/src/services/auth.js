import api from './api';

export async function registerUser(name, login, password) {
  try {
    const response = await api.post('/register', {
      name, login, password
    });

    return response.data;
  } catch(error) {
    throw error;
  }
}

export async function loginUser(login, password) {
  try {
    const response = await api.post('/authenticate', {
      login, password
    });

    return response.data;
  } catch(error) {
    throw error;
  }
}
