import Login from '@/components/pages/login/Login';
import React, { Suspense } from 'react';

const page = () => {
  return (
    <Suspense>
      <Login />
    </Suspense>
  );
};

export default page;
