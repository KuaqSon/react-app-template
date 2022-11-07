import { Container, Paper, Stack, Title } from '@mantine/core';
import { TableSort } from 'components/demo/TableSort';

export default function PageTimerLoggerDemo(): JSX.Element {
  return (
    <>
      <Container size="lg">
        <Title my="xl">Time Tracking</Title>
        <Paper my="xl" shadow="xs" p="md" radius="md">
          <TableSort />
        </Paper>
      </Container>
    </>
  );
}
