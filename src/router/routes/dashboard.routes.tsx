import NotFound from 'pages/not-found';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

const PageDashboardDemo = React.lazy(() => import('pages/demo/dashboard'));
const PagePerformanceDashboardDemo = React.lazy(() => import('pages/demo/dashboard-performance'));

const DashboardRoutes = () => (
  <Routes>
    <Route path="/" element={<PageDashboardDemo />} />
    <Route path="/performance" element={<PagePerformanceDashboardDemo />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default DashboardRoutes;
