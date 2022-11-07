import { NavLink } from '@mantine/core';
import { IconSquareDot } from '@tabler/icons';
import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

export default function NavRouterLink({
  to,
  title,
  icon,
  subtitle,
}: {
  to: string;
  title: string;
  icon?: React.ReactNode;
  subtitle?: string;
}): JSX.Element {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });
  const Icon = icon ? (icon as React.ElementType) : IconSquareDot;

  return (
    <Link style={{ textDecoration: 'none' }} to={to}>
      <NavLink
        label={title}
        description={subtitle}
        icon={<Icon size={18} />}
        active={!!match}
        variant="filled"
        py={6}
        px="sm"
        sx={{ cursor: 'pointer' }}
      />
    </Link>
  );
}
