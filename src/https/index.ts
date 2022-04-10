import axios from 'axios';

export const API_URL = 'http://localhost:5000/api/v1';

export const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

$api.interceptors.request.use((config) => {
  // Try set access token from localStorage
  const accessToken = localStorage.getItem('accessToken');
  // TODO: Remove somehow config.headers check
  if (accessToken && config.headers) {
    config.headers['Authorization'] = `Bearer ${accessToken}`;
  }
  return config;
});

$api.interceptors.response.use(
  (config) => config,
  async (error) => {
    const originalRequest = error.config;
    //  TODO: implement access / refresh token logic
  }
);
