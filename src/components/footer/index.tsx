import { Box, Container } from '@mantine/core';

export default function Footer() {
  return (
    <Box sx={{ padding: '12px 16px 24px 16px' }}>
      <Container sx={{ textAlign: 'center' }}>
        <Box sx={{ fontSize: 18, fontWeight: 500 }}>Made by Quang Son Nguyen with ❤️</Box>
        <Box sx={{ fontSize: 14, fontWeight: 400 }}>© 2022 nqson.com. All rights reserved.</Box>
      </Container>
    </Box>
  );
}
