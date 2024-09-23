import axios from 'axios';

export const httpRequestRenewToken = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL!,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});
httpRequestRenewToken.interceptors.request.use(
  async function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

httpRequestRenewToken.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    return Promise.reject(error);
  },
);
