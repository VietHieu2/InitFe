'use client';

import LoadingFullScreen from '@/components/common/LoadingFullScreen';
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
  return <LoadingFullScreen />;
};

export default Logout;
