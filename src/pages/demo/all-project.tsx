import { Container, Paper, Title } from '@mantine/core';
import { StatsRingCard } from 'components/demo/StatsCardWithProgress';
import { TableReviews } from 'components/demo/TableReviews';

export default function PageAllProjectDemo(): JSX.Element {
  return (
    <>
      <Container size="lg">
        <Title my="xl">All Projects</Title>
        <StatsRingCard />
        <Paper my="xl" shadow="xs" p="md" radius="md">
          <TableReviews />
        </Paper>
      </Container>
    </>
  );
}
