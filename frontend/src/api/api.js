// src/api/api.ts
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',  // Change the base URL as needed
});

export default api;
