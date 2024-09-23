import Callback from '@/components/pages/callback/Callback';
import React, { Suspense } from 'react';

const page = () => {
  return (
    <Suspense>
      <Callback />
    </Suspense>
  );
};

export default page;
