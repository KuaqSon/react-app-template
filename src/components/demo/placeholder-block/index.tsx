import { Container, Paper, Title } from '@mantine/core';
import { GridAsymmetrical } from 'components/demo/GridAsymmetrical';

export default function PlaceholderBlock({ title = 'Page Placeholder' }: { title?: string }): JSX.Element {
  return (
    <Container size="lg">
      <Title my="xl">{title}</Title>
      <Paper shadow="xs" radius="md" p="md">
        <GridAsymmetrical />
      </Paper>
    </Container>
  );
}
