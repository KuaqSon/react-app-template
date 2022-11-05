import { Text } from '@mantine/core';
import { Link } from 'react-router-dom';

export default function MainLogo(): JSX.Element {
  return (
    <Link to="/" className="link">
      <Text fz="xl" fw={900} variant="gradient" gradient={{ from: 'indigo', to: 'cyan', deg: 45 }} lh={1}>
        REACT APP
      </Text>
      <Text fz="xs" fw={400} c="black">
        TEMPLATE
      </Text>
    </Link>
  );
}
