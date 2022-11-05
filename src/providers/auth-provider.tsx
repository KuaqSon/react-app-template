import { useQuery } from '@tanstack/react-query';
import ErrorBoundary from 'components/error-boundary';
import SuspendLoading from 'components/suspend-loading';
import { ReactNode } from 'react';
import { mockCurrentUserApi } from 'services/api';
import { useAppStore } from 'stores';

export default function AuthProvider({ children }: { children: ReactNode }): JSX.Element {
  const authorize = useAppStore((state) => state.authorize);

  const { isLoading } = useQuery(['currentUser'], () => mockCurrentUserApi(), {
    cacheTime: 0,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    onSuccess: ({ data, status }) => {
      if (status === 200 && data.user) {
        authorize(data.user);
      }
    },
  });

  return isLoading ? <SuspendLoading /> : <ErrorBoundary>{children}</ErrorBoundary>;
}
