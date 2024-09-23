import { ApiUrl } from '@/constants/api';
import { GetCurrentResponse, IUser } from '@/interface/apiResponse';
import { httpRequest } from '@/utils/httpRequest';
import { httpRequestServer } from '@/utils/httpRequestServer';

export const getCurrentUser = async (): Promise<IUser> => {
  const res = await httpRequest.get<IUser>(ApiUrl.GET_PROFILE);
  return res.data;
};

export const getCurrentUserServer = async (): Promise<GetCurrentResponse> => {
  const res = await httpRequestServer(ApiUrl.GET_PROFILE);
  return res;
};
