import { Container, Paper, Stack, Title } from '@mantine/core';
import { SwitchesCard } from 'components/demo/CardWithSwitches';
import { StatsRingCard } from 'components/demo/StatsCardWithProgress';
import { TableReviews } from 'components/demo/TableReviews';

export default function PageAllProjectDemo(): JSX.Element {
  return (
    <>
      <Container size="lg">
        <Title my="xl">All Projects</Title>
        <Paper my="xl" shadow="xs" p="md" radius="md">
          <TableReviews />
        </Paper>
      </Container>
    </>
  );
}
