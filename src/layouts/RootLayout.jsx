import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '@/components/Header';

const RootLayout = () => {
  return (
    <>
      <Header hasSearch={false} />
      <Outlet />
    </>
  );
};

export default RootLayout;
