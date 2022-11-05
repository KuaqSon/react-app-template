import { Box, Center, Code, Flex, Group, Loader, Navbar, ScrollArea, createStyles } from '@mantine/core';
import {
  IconAdjustments,
  IconCalendarStats,
  IconFileAnalytics,
  IconGauge,
  IconLock,
  IconNotes,
  IconPresentationAnalytics,
} from '@tabler/icons';
import MainLogo from 'components/logo/main-logo';
import { LinksGroup } from 'components/shared/links-group';
import { UserButton } from 'components/shared/user-button';
import { useMobileBreak } from 'hooks/use-screen-break';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { APP_VERSION } from 'utils/constants';

const mockdata = [
  { label: 'Dashboard', icon: IconGauge },
  {
    label: 'Market news',
    icon: IconNotes,
    initiallyOpened: true,
    links: [
      { label: 'Overview', link: '/' },
      { label: 'Forecasts', link: '/' },
      { label: 'Outlook', link: '/' },
      { label: 'Real time', link: '/' },
    ],
  },
  {
    label: 'Releases',
    icon: IconCalendarStats,
    links: [
      { label: 'Upcoming releases', link: '/' },
      { label: 'Previous releases', link: '/' },
      { label: 'Releases schedule', link: '/' },
    ],
  },
  { label: 'Analytics', icon: IconPresentationAnalytics },
  { label: 'Contracts', icon: IconFileAnalytics },
  { label: 'Settings', icon: IconAdjustments },
  {
    label: 'Security',
    icon: IconLock,
    links: [
      { label: 'Enable 2FA', link: '/' },
      { label: 'Change password', link: '/' },
      { label: 'Recovery codes', link: '/' },
    ],
  },
];

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: theme.white,
    borderRight: 'none',
  },

  header: {
    padding: theme.spacing.md,
    color: theme.black,
  },

  links: {},

  linksInner: {
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
  },

  footer: {},
}));

export function NavbarNested() {
  const { classes } = useStyles();
  const links = mockdata.map((item) => <LinksGroup {...item} key={item.label} />);

  return (
    <Navbar height="100vh" width={{ sm: 300 }} className={classes.navbar}>
      <Navbar.Section className={classes.header}>
        <Group position="apart">
          <MainLogo />
          <Code sx={{ fontWeight: 700 }}>{APP_VERSION}</Code>
        </Group>
      </Navbar.Section>

      <Navbar.Section grow className={classes.links} component={ScrollArea}>
        <div className={classes.linksInner}>{links}</div>
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>
        <Link to="/account/profile" className="link">
          <UserButton
            // eslint-disable-next-line max-len
            image="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
            name="Ann Nullpointer"
            email="anullpointer@yahoo.com"
          />
        </Link>
      </Navbar.Section>
    </Navbar>
  );
}

export default function AppLayout(): JSX.Element {
  const isMobile = useMobileBreak();

  return (
    <Flex gap="md">
      <NavbarNested />
      <Box>
        <React.Suspense
          fallback={
            <Center sx={{ padding: 32 }}>
              <Loader />
            </Center>
          }
        >
          <Outlet />
        </React.Suspense>
      </Box>
    </Flex>
  );
}
