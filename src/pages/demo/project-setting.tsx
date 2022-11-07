import { Container, Stack, Title } from '@mantine/core';
import { SwitchesCard } from 'components/demo/CardWithSwitches';
import { StatsRingCard } from 'components/demo/StatsCardWithProgress';

export default function PageProjectSettingDemo(): JSX.Element {
  return (
    <>
      <Container size="lg">
        <Title my="xl">All Projects</Title>
        <Stack my="xl">
          <StatsRingCard />
          <SwitchesCard />
        </Stack>
      </Container>
    </>
  );
}
