import axios from 'axios';

const baseUrl = 'http://192.168.1.106:3333';

const api = axios.create({
  baseURL: baseUrl,
});

export default api;
