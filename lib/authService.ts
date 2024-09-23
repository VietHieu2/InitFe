import { ApiUrl } from '@/constants/api';
import { AuthResponse } from '@/interface/apiResponse';
import { httpRequest } from '@/utils/httpRequest';
import { httpRequestRenewToken } from '@/utils/httpRequestRenewToken';

export const authCallback = async (
  code: string,
  redirectUri: string,
): Promise<AuthResponse> => {
  try {
    const response = await httpRequest.post(ApiUrl.POST_CALLBACK, {
      code,
      redirectUri,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const renewToken = async (refreshToken: string) => {
  try {
    const res = await httpRequestRenewToken.post(ApiUrl.RENEW_TOKEN, {
      refreshToken,
    });
    return res.data;
  } catch (error) {
    throw error;
  }
};
