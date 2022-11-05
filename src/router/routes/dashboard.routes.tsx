import PlaceholderBlock from 'components/demo/placeholder-block';
import NotFound from 'pages/NotFound';
import { Route, Routes } from 'react-router-dom';

const DashboardRoutes = () => (
  <Routes>
    <Route path="/" element={<PlaceholderBlock title="Dashboard" />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default DashboardRoutes;
