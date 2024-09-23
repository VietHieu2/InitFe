import axios from 'axios';
import { getAuthorization } from './cache';
export const httpRequest = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL!,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});
httpRequest.interceptors.request.use(
  async function (config) {
    config.headers['Authorization'] = await getAuthorization();
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

httpRequest.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    return Promise.reject(error);
  },
);
