'use server';
import { cookies } from 'next/headers';
import { checkTokenExpiration } from './checkTokenExpiration';
async function getAuthorization(): Promise<string> {
  const cookieStore = cookies();
  const accessToken = cookieStore.get('accessToken')?.value;
  const refreshToken = cookieStore.get('refreshToken')?.value;

  if (accessToken) {
    return await checkTokenExpiration(accessToken, refreshToken!);
  }
  return '';
}

export const httpRequestServer = async (
  url: string,
  method = 'GET',
  options: any = {},
) => {
  const defaultHeaders = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: await getAuthorization(),
  };
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL!}${url}`, {
      method: method,
      ...options,
      headers: defaultHeaders,
    });
    const data = await response.json();
    return data;
  } catch (error) {
    return null;
  }
};
