import { MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ErrorBoundary from 'components/ErrorBoundary';
import { PrivateLayout, PublicLayout } from 'components/Layout';
import { SuspendLoading } from 'components/Loading';
import Interrupts from 'pages/Interrupts';
import Login from 'pages/Login';
import NotFound from 'pages/NotFound';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Lazy load pages
const Home = React.lazy(() => import('pages/Home'));
const Quotes = React.lazy(() => import('pages/Quotes'));
const Football = React.lazy(() => import('pages/Football'));

const queryClient = new QueryClient();

function App(): JSX.Element {
  return (
    <React.Suspense fallback={<SuspendLoading />}>
      <ErrorBoundary>
        <QueryClientProvider client={queryClient}>
          <MantineProvider>
            <NotificationsProvider>
              <Routes>
                <Route element={<PrivateLayout />}>
                  <Route path="/" element={<Home />} />
                  <Route path="/quotes" element={<Quotes />} />
                  <Route path="/football" element={<Football />} />
                </Route>

                <Route element={<PublicLayout />}>
                  <Route path="/sign-in" element={<Login />} />
                </Route>

                <Route path="/interrupts" element={<Interrupts />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </NotificationsProvider>
          </MantineProvider>
        </QueryClientProvider>
      </ErrorBoundary>
    </React.Suspense>
  );
}

export default App;
