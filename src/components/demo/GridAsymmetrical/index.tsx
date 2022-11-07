import { Grid, Skeleton } from '@mantine/core';

const child = <Skeleton height={140} radius="md" animate />;

export function GridAsymmetrical() {
  return (
    <Grid>
      <Grid.Col xs={4}>{child}</Grid.Col>
      <Grid.Col xs={8}>{child}</Grid.Col>
      <Grid.Col xs={8}>{child}</Grid.Col>
      <Grid.Col xs={4}>{child}</Grid.Col>
      <Grid.Col xs={3}>{child}</Grid.Col>
      <Grid.Col xs={3}>{child}</Grid.Col>
      <Grid.Col xs={6}>{child}</Grid.Col>
      <Grid.Col xs={4}>{child}</Grid.Col>
      <Grid.Col xs={8}>{child}</Grid.Col>
    </Grid>
  );
}
