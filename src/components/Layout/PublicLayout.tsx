import { SuspendLoading } from 'components/Loading';
import React from 'react';
import { Outlet } from 'react-router-dom';

export default function PublicLayout(): JSX.Element {
  return (
    <>
      <React.Suspense fallback={<SuspendLoading />}>
        <Outlet />
      </React.Suspense>
    </>
  );
}
