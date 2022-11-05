import { Box } from '@mantine/core';
import { Link } from 'react-router-dom';

export default function MainLogo(): JSX.Element {
  return (
    <Link to="/" className="link">
      <Box>RAT</Box>
    </Link>
  );
}
