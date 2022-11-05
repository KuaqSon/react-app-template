import { MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SuspendLoading } from 'components/Loading';
import ErrorBoundary from 'components/error-boundary';
import AuthProvider from 'providers/auth-provider';
import React from 'react';
import AppRouter from 'router';

const queryClient = new QueryClient();

function App(): JSX.Element {
  return (
    <React.Suspense fallback={<SuspendLoading />}>
      <ErrorBoundary>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <MantineProvider>
              <NotificationsProvider>
                <AppRouter />
              </NotificationsProvider>
            </MantineProvider>
          </AuthProvider>
        </QueryClientProvider>
      </ErrorBoundary>
    </React.Suspense>
  );
}

export default App;
