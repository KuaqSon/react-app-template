import { Container, Stack } from '@mantine/core';
import ProgressCard from 'components/demo/ProgressCard';
import StatsControls from 'components/demo/StatsControls';

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
