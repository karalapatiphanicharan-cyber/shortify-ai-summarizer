import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '/api',
});

export const checkHealth = async () => {
  const response = await api.get('/health');
  return response.data;
};

export const summarizeText = async (text, length = 'medium') => {
  const response = await api.post('/summarize', { text, length });
  return response.data;
};

export default api;
