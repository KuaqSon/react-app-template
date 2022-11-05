import { Center, Loader } from '@mantine/core';

export default function SuspendLoading(): JSX.Element {
  return (
    <Center sx={{ width: '100vw', height: '100vh' }}>
      <Loader size="xl" />
    </Center>
  );
}
