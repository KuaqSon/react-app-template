import { Box, Center, Container, Loader } from '@mantine/core';
import Footer from 'components/Footer';
import { SuspendLoading } from 'components/Loading';
import NavBar from 'components/NavBar';
import UserInfo from 'components/UserInfo';
import React from 'react';
import { useQuery } from 'react-query';
import { Navigate, Outlet } from 'react-router-dom';
import { mockCurrentUserApi } from 'services/api';
import { useStore } from 'stores';

export default function PrivateLayout(): JSX.Element {
  const gState = useStore((state) => state);
  console.log('🚀 ~ file: PrivateLayout.tsx ~ line 11 ~ PrivateLayout ~ gState', gState);
  const authorize = useStore((state) => state.authorize);
  const isLoggedIn = useStore((state) => state.isLoggedIn);
  const user = useStore((state) => state.user);
  const { isLoading } = useQuery('userDetail', () => mockCurrentUserApi(), {
    cacheTime: 0,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    onSuccess: ({ data, status }) => {
      if (status === 200) {
        authorize(data.user);
      }
    },
  });

  if (isLoading) {
    return <SuspendLoading />;
  }

  if (!isLoggedIn) {
    return <Navigate to="/sign-in" replace />;
  }

  return (
    <>
      <Box
        sx={{
          backgroundColor: '#ffffff',
          marginBottom: '20px',
          padding: '20px',
          boxShadow: '0 1px 3px rgb(0 0 0 / 5%), rgb(0 0 0 / 5%) 0px 10px 15px -5px, rgb(0 0 0 / 4%) 0px 7px 7px -5px',
        }}
      >
        <Container sx={{ minHeight: '100vh' }}>
          <UserInfo user={user} />
          <NavBar />
          <React.Suspense
            fallback={
              <Center sx={{ padding: 32 }}>
                <Loader />
              </Center>
            }
          >
            <Outlet />
          </React.Suspense>
        </Container>
      </Box>
      <Footer />
    </>
  );
}
