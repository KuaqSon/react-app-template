import AppLayout from 'components/layout/app-layout';
import AuthLayout from 'components/layout/auth-layout';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthenticatedGuard } from 'router/authenticated.guard';
import AccountRoutes from 'router/routes/account.routes';
import DashboardRoutes from 'router/routes/dashboard.routes';

const PageAllProjectDemo = React.lazy(() => import('pages/demo/all-project'));
const PageProjectSettingDemo = React.lazy(() => import('pages/demo/project-setting'));
const PageTimerLoggerDemo = React.lazy(() => import('pages/demo/timer-logger'));
const PlaceholderBlock = React.lazy(() => import('components/demo/placeholder-block'));
const PlaceholderTable = React.lazy(() => import('components/demo/placeholder-table'));

const NotFound = React.lazy(() => import('pages/not-found'));
const Interrupts = React.lazy(() => import('pages/error/interrupts'));
const Forbidden = React.lazy(() => import('pages/error/forbidden'));
const PageLogin = React.lazy(() => import('pages/auth/login'));

export default function AppRouter(): JSX.Element {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />

        <Route element={<AuthLayout />}>
          <Route path="sign-in" element={<PageLogin />} />
          <Route path="register" element={<PageLogin />} />
          <Route path="forgot-password" element={<PageLogin />} />
        </Route>

        <Route element={<AuthenticatedGuard element={<AppLayout />} />}>
          <Route path="account/*" element={<AccountRoutes />} />
          <Route path="dashboard/*" element={<DashboardRoutes />} />

          <Route path="projects/all" element={<PageAllProjectDemo />} />
          <Route path="projects/setting" element={<PageProjectSettingDemo />} />

          <Route path="scheduled/calendar" element={<PlaceholderBlock title="Calendar" />} />
          <Route path="scheduled/availability" element={<PlaceholderTable title="Availability" />} />

          <Route path="task/all" element={<PlaceholderBlock title="All Tasks" />} />
          <Route path="task/in-progress" element={<PlaceholderTable title="Tasks In Progress" />} />
          <Route path="task/in-review" element={<PlaceholderBlock title="Tasks In Review" />} />
          <Route path="task/next-up" element={<PlaceholderTable title="Next Up" />} />

          <Route path="timer/logger" element={<PageTimerLoggerDemo />} />
          <Route path="timer/report" element={<PageTimerLoggerDemo />} />
        </Route>

        <Route path="/interrupts" element={<Interrupts />} />
        <Route path="/forbidden" element={<Forbidden />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
