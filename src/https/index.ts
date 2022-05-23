import axios from 'axios';
import { AuthConstants } from '../constants/appConstants';
import { StatusCodes } from 'http-status-codes';
import { apiRoutes } from '../services/helpers/apiRoutes';

interface TokensResponse {
  refresh: string;
  access: string;
}

// TODO: get from env
export const API_URL = 'http://localhost:5000/api/v1';

const $api = axios.create({
  baseURL: API_URL,
});

$api.interceptors.request.use((config) => {
  // Try set access token from localStorage
  const accessToken = localStorage.getItem(AuthConstants.ACCESS_TOKEN_FIELD);
  // TODO: Remove somehow config.headers check
  if (!!accessToken && config.headers) {
    config.headers['Authorization'] = `Bearer ${accessToken}`;
  }
  return config;
});

$api.interceptors.response.use(
  (config) => config,
  async (error) => {
    const originalRequest = error.config;
    if (
      error?.response?.status === StatusCodes.UNAUTHORIZED &&
      !!originalRequest._isRetry
    ) {
      originalRequest._isRetry = true;
      //  Try get new tokens
      try {
        const refreshToken = localStorage.getItem(
          AuthConstants.REFRESH_TOKEN_FIELD
        );
        if (!!refreshToken) {
          const response = await axios.post<TokensResponse>(
            apiRoutes.auth.refresh(),
            {
              refresh: refreshToken,
            }
          );
          localStorage.setItem(
            AuthConstants.ACCESS_TOKEN_FIELD,
            response.data.access
          );
          localStorage.setItem(
            AuthConstants.REFRESH_TOKEN_FIELD,
            response.data.refresh
          );
          return $api.request(originalRequest);
        }
      } catch (e) {
        console.log(e);
      }
    }

    if (
      error?.response?.status === StatusCodes.UNAUTHORIZED &&
      originalRequest._isRetry
    ) {
      localStorage.removeItem(AuthConstants.ACCESS_TOKEN_FIELD);
      localStorage.removeItem(AuthConstants.REFRESH_TOKEN_FIELD);
      //  TODO: Redirect lo login page
    }

    if (error?.response?.status === StatusCodes.FORBIDDEN) {
      //  TODO: Redirect to Forbidden page
    }

    return Promise.reject(error);
  }
);

export default $api;
