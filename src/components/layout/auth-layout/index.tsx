import { Center, Loader } from '@mantine/core';
import React from 'react';
import { Outlet } from 'react-router-dom';

export default function AuthLayout(): JSX.Element {
  return (
    <>
      <React.Suspense
        fallback={
          <Center sx={{ padding: 32 }}>
            <Loader />
          </Center>
        }
      >
        <Outlet />
      </React.Suspense>
    </>
  );
}
