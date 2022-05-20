import { Anchor, Box, Group } from '@mantine/core';
import { Link } from 'react-router-dom';
import * as AuthService from 'services/auth-service';

const routes: Array<{ label: string; path: string }> = [
  { label: 'Home', path: '/' },
  { label: 'Quotes', path: '/quotes' },
  { label: 'Football', path: '/football' },
];

export default function NavBar() {
  return (
    <Box sx={{ padding: '24px 0px', margin: '24px 0' }}>
      <Group position="center" spacing="lg">
        {routes.map((r) => (
          <Anchor key={r.path} component={Link} to={r.path} sx={{ textAlign: 'center' }}>
            {r.label}
          </Anchor>
        ))}
        <Anchor sx={{ color: 'red', textAlign: 'center' }} onClick={() => AuthService.logOut()}>
          Log Out
        </Anchor>
      </Group>
    </Box>
  );
}
