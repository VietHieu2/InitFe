'use client';
import Loading from '@/common/Loading';
import { pathnameUrl } from '@/constants/pathname';
import { authCallback } from '@/lib/authService';
import { setCookie } from 'cookies-next';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const Callback = () => {
  const searchParam = useSearchParams();
  const router = useRouter();
  const code = searchParam.get('code');
  useEffect(() => {
    const getCallback = async () => {
      if (code) {
        try {
          const res = await authCallback(code, window.location.origin);
          res.result && setCookie('accessToken', res.result.accessToken);
          res.result && setCookie('refreshToken', res.result.refreshToken);
          router.push(pathnameUrl.HOME);
        } catch (error) {
          console.log('[Auth Callback Error]: ', error);
        }
      }
    };
    getCallback();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <Loading />
    </div>
  );
};

export default Callback;
