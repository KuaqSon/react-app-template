import PagePlaceholder from 'components/demo/page2-placeholder';
import NotFound from 'pages/NotFound';
import { Route, Routes } from 'react-router-dom';

const DashboardRoutes = () => (
  <Routes>
    <Route path="/" element={<PagePlaceholder title="Dashboard" />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default DashboardRoutes;
