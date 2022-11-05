import { Box, Title } from '@mantine/core';

export default function PagePlaceholder({ title = 'Page Placeholder' }: { title?: string }): JSX.Element {
  return (
    <Box>
      <Title align="center">{title}</Title>
    </Box>
  );
}
