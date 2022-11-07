import { Container, Paper, Title } from '@mantine/core';
import { TableSort } from 'components/demo/TableSort';

export default function PlaceholderTable({ title = 'Page Placeholder' }: { title?: string }): JSX.Element {
  return (
    <Container size="lg">
      <Title my="xl">{title}</Title>
      <Paper my="xl" shadow="xs" p="md" radius="md">
        <TableSort />
      </Paper>
    </Container>
  );
}
