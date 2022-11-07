import { Container, Title } from '@mantine/core';
import UserInfo from 'components/shared/user-info';
import { useAppStore } from 'stores';

export default function PageUserProfile(): JSX.Element {
  const currentUser = useAppStore((state) => state.currentUser);

  return (
    <>
      <Container size="lg">
        <Title my="xl">Account Profile</Title>
        <UserInfo user={currentUser} />
      </Container>
    </>
  );
}
