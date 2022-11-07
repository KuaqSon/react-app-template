import {
  ActionIcon,
  Box,
  Center,
  Code,
  Drawer,
  Flex,
  Group,
  Header,
  Loader,
  Navbar,
  ScrollArea,
  Text,
  ThemeIcon,
  createStyles,
} from '@mantine/core';
import { IconAdjustmentsHorizontal, IconX } from '@tabler/icons';
import { defaultRoutes } from 'components/layout/app-layout/routes-config';
import MainLogo from 'components/logo/main-logo';
import SideBarContent from 'components/shared/side-bar-content';
import { UserButton } from 'components/shared/user-button';
import { useMobileBreak } from 'hooks/use-screen-break';
import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useAppStore } from 'stores';
import { APP_VERSION } from 'utils/constants';

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: theme.white,
    borderRight: 'none',
  },

  appInner: {
    flex: 1,
    backgroundColor: theme.colors.gray[1],
    margin: 0,
    padding: theme.spacing.sm,
  },
}));

export default function AppLayout(): JSX.Element {
  const isMobile = useMobileBreak();
  const { classes } = useStyles();
  const [opened, setOpened] = useState(false);
  const location = useLocation();
  const currentUser = useAppStore((state) => state.currentUser);

  useEffect(() => {
    setOpened(false);
  }, [location.pathname]);

  const renderNavbarNested = () => (
    <Navbar height="100vh" width={{ sm: 260 }} className={classes.navbar}>
      <Navbar.Section p="sm">
        <Group position="apart">
          <MainLogo />
          <Group>
            <Code sx={{ fontWeight: 700 }}>{APP_VERSION}</Code>
            {isMobile && (
              <ActionIcon onClick={() => setOpened(false)}>
                <ThemeIcon color="dark" variant="outline" size="lg">
                  <IconX />
                </ThemeIcon>
              </ActionIcon>
            )}
          </Group>
        </Group>
      </Navbar.Section>

      <Navbar.Section grow component={ScrollArea}>
        <SideBarContent routes={defaultRoutes} />
      </Navbar.Section>

      <Navbar.Section>
        <Link to="/account/profile" className="link">
          <UserButton image={currentUser.photo} name={currentUser.name} email={currentUser.email} />
        </Link>
        <Text fz="xs" ta="center">
          Made by Son Nguyen with ❤️
        </Text>
      </Navbar.Section>
    </Navbar>
  );

  const renderMobileHeader = () => {
    if (!isMobile) {
      return null;
    }

    return (
      <>
        <Drawer position="right" opened={opened} onClose={() => setOpened(false)} size="xl" withCloseButton={false}>
          {renderNavbarNested()}
        </Drawer>
        <Header height={60}>
          <Flex align="center" justify="space-between" h="100%" px="sm">
            <MainLogo />
            <ActionIcon onClick={() => setOpened(true)}>
              <ThemeIcon color="dark" variant="outline" size="lg">
                <IconAdjustmentsHorizontal />
              </ThemeIcon>
            </ActionIcon>
          </Flex>
        </Header>
      </>
    );
  };

  return (
    <Box bg="white">
      {renderMobileHeader()}
      <Flex sx={{ height: '100vh' }}>
        {!isMobile && renderNavbarNested()}

        <Box className={classes.appInner} component={ScrollArea}>
          <React.Suspense
            fallback={
              <Center sx={{ padding: 32, height: '60vh' }}>
                <Loader />
              </Center>
            }
          >
            <Outlet />
          </React.Suspense>
        </Box>
      </Flex>
    </Box>
  );
}
