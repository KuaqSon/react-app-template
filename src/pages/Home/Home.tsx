import { Container, Stack } from '@mantine/core';
import ProgressCard from 'components/ProgressCard';
import StatsControls from 'components/StatsControls';

export default function Home(): JSX.Element {
  return (
    <>
      <Container size="sm">
        <Stack>
          <ProgressCard />
          <StatsControls />
        </Stack>
      </Container>
    </>
  );
}
