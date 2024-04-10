import api from './api';

export async function getUsers() {
  try {
    const response = await api.get('/users');
    return response.data;
  } catch (error) {
    // console.error('Erro ao obter usuários:', error);
    throw error;
  }
}