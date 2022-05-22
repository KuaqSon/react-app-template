import { Container, Stack } from '@mantine/core';
import ProgressCard from 'components/Demo/ProgressCard';
import StatsControls from 'components/Demo/StatsControls';

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
