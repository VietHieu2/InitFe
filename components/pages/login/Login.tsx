'use client';

import { setCookie } from 'cookies-next';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react';

const Login = () => {
  const searchParams = useSearchParams();
  const action = searchParams.get('action');

  const redirectUri =
    typeof window !== 'undefined' ? `${window.location.origin}/callback` : '';

  const baseAuthUrl =
    `${process.env.NEXT_PUBLIC_AUTH0_ISSUER_BASE_URL}/authorize` +
    `?response_type=code` +
    `&client_id=${process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID}` +
    `&redirect_uri=${encodeURIComponent(redirectUri)}` +
    `&scope=openid%20profile%20email%20offline_access` +
    `&audience=${process.env.NEXT_PUBLIC_AUTH0_AUDIENCE}`;

  const authUrl =
    action === 'signup' ? `${baseAuthUrl}&screen_hint=signup` : baseAuthUrl;

  const router = useRouter();

  useEffect(() => {
    router.push(authUrl);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <></>;
};

export default Login;
