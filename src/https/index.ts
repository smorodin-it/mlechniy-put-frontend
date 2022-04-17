import axios from 'axios';

export const API_URL = 'http://localhost:5000/api/v1';

const $api = axios.create({
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
    console.log(originalRequest);
    //  TODO: implement access / refresh token logic
  }
);

export default $api;
