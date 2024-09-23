import { renewToken } from '@/lib/authService';
import { setCookie } from 'cookies-next';
import { jwtDecode } from 'jwt-decode';
export const checkTokenExpiration = async (
  accessToken: string,
  refreshToken: string,
) => {
  const decodedTokenn = jwtDecode(accessToken);
  const expirationTime = decodedTokenn.exp;
  if (expirationTime) {
    const currentTime = new Date().getTime();
    const timeUtilExpration = expirationTime * 1000 - currentTime;
    const refreshThreshold = 5 * 60 * 1000;
    if (timeUtilExpration < refreshThreshold) {
      try {
        const res = await renewToken(refreshToken);
        console.log(res);
        setCookie('accessToken', res.result.newAccessToken);
        return `Bearer ${res.result.newAccessToken}`;
      } catch (e) {
        console.log('[Refresh Token Error]: ', e);
        return '';
      }
    } else {
      return `Bearer ${accessToken}`;
    }
  }
  return '';
};
