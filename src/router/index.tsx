import AppLayout from 'components/layout/app-layout';
import AuthLayout from 'components/layout/auth-layout';
import Interrupts from 'pages/Interrupts';
import Login from 'pages/Login';
import NotFound from 'pages/NotFound';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthenticatedGuard } from 'router/authenticated.guard';
import AccountRoutes from 'router/routes/account.routes';
import DashboardRoutes from 'router/routes/dashboard.routes';

export default function AppRouter(): JSX.Element {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />

        <Route element={<AuthLayout />}>
          <Route path="sign-in" element={<Login />} />
          <Route path="register" element={<Login />} />
          <Route path="forgot-password" element={<Login />} />
        </Route>

        <Route element={<AppLayout />}>
          <Route path="account/*" element={<AccountRoutes />} />
          <Route path="dashboard/*" element={<AuthenticatedGuard element={<DashboardRoutes />} />} />
        </Route>

        <Route path="/interrupts" element={<Interrupts />} />
        <Route path="/forbidden" element={<Interrupts />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
