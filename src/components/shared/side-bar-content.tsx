import { Box, Stack, Text } from '@mantine/core';
import NavRouterLink from 'components/shared/nav-router-link';
import { INavItemGroup } from 'interfaces/common';
import { ReactNode } from 'react';

function NavGroup({ group }: { group: INavItemGroup }): JSX.Element {
  return (
    <Box>
      <Box py={4} px="sm">
        <Text fz="sm" fw={600}>
          {group.title}
        </Text>
      </Box>
      {group.items.map((n, idx) => (
        <NavRouterLink key={idx} to={n.href} title={n.title} icon={n.icon as ReactNode} subtitle={n.subtitle} />
      ))}
    </Box>
  );
}

export default function SideBarContent({ routes }: { routes: INavItemGroup[] }): JSX.Element {
  return (
    <Stack>
      {routes.map((r, idx) => (
        <NavGroup key={idx} group={r} />
      ))}
    </Stack>
  );
}
