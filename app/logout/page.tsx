'use client';

import Loading from '@/common/Loading';
import { getCookie, deleteCookie } from 'cookies-next';
import React, { useEffect } from 'react';

const Logout = () => {
  const accessToken = getCookie('accessToken');
  const redirectUri =
    typeof window !== 'undefined' ? `${window.location.origin}` : '';
  const logoutUrl = `${process.env.NEXT_PUBLIC_AUTH0_ISSUER_BASE_URL}/v2/logout?returnTo=${redirectUri}&client_id=${process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID}`;

  const handleLogout = async () => {
    if (accessToken) {
      deleteCookie('accessToken');
      deleteCookie('refreshToken');
      deleteCookie('settings-storage');
    }

    window.location.href = logoutUrl;
  };
  useEffect(() => {
    handleLogout();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="relative h-screen w-full">
      <div className="absolute left-1/2 top-1/2 z-[100] flex -translate-x-1/2 -translate-y-1/2 justify-center bg-white bg-opacity-50">
        <Loading width="10" height="10" />
      </div>
    </div>
  );
};

export default Logout;
