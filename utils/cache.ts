import { getCookie, setCookie } from 'cookies-next';
import { checkTokenExpiration } from '@/utils/checkTokenExpiration';

export const getAuthorization = async () => {
  const accessToken = getCookie('accessToken');
  const refreshToken = getCookie('refreshToken');

  if (accessToken) {
    return checkTokenExpiration(accessToken, refreshToken!);
  }

  return null;
};
