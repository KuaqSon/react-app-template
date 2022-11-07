import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const PageUserProfile = React.lazy(() => import('pages/user-profile'));
const NotFound = React.lazy(() => import('pages/not-found'));

const AccountRoutes = () => (
  <Routes>
    <Route path="/" element={<Navigate to="profile" replace />} />
    <Route path="profile" element={<PageUserProfile />} />

    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AccountRoutes;
