import { MantineProvider, MantineThemeOverride } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ErrorBoundary from 'components/error-boundary';
import SuspendLoading from 'components/suspend-loading';
import AuthProvider from 'providers/auth-provider';
import React from 'react';
import AppRouter from 'router';
import { customTheme } from 'utils/theme';

const queryClient = new QueryClient();

function App(): JSX.Element {
  return (
    <React.Suspense fallback={<SuspendLoading />}>
      <ErrorBoundary>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <MantineProvider theme={customTheme as MantineThemeOverride} withGlobalStyles withNormalizeCSS>
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
