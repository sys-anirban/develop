import axios from 'axios';
import { API_URL } from '../constants/Config';
const token = sessionStorage.getItem('token');
const TIMEOUT = 3000;
const apiClient = axios.create({
  baseURL: API_URL,
  timeout: TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
    common: {
      Authorization: token ? `Bearer ${token}` : null,
    },
  },
});
export default apiClient;
