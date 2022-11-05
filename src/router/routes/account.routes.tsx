import PagePlaceholder from 'components/demo/page-placeholder';
import NotFound from 'pages/NotFound';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthenticatedGuard } from 'router/authenticated.guard';

const AccountRoutes = () => (
  <Routes>
    <Route path="/" element={<AuthenticatedGuard element={<Navigate to="profile" replace />} />} />
    <Route path="profile" element={<AuthenticatedGuard element={<PagePlaceholder />} />} />

    {/* <Route path="activate" element={<PageActivate />} />
    <Route path="reset" element={<PageResetPasswordRequest />} />
    <Route path="reset/finish" element={<PageResetPasswordConfirm />} />

    <Route path="profile" element={<AuthenticatedGuard element={<PageProfile />} />} />
    <Route path="password" element={<AuthenticatedGuard element={<PagePassword />} />} /> */}

    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AccountRoutes;
