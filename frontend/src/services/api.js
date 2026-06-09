import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export const checkHealth = async () => {
  const response = await api.get('/health');
  return response.data;
};

export const summarizeText = async (text) => {
  const response = await api.post('/summarize', { text });
  return response.data;
};

export default api;
