import { Container, Stack } from '@mantine/core';
import ProgressCard from 'components/demo2/ProgressCard';
import StatsControls from 'components/demo2/StatsControls';

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
