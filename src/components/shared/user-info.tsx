import { Avatar, Button, Center, Paper, Text } from '@mantine/core';
import { IconLogout } from '@tabler/icons';
import { IUser } from 'interfaces/auth';
import * as AuthService from 'services/auth-service';

export interface UserInfoProps {
  user: IUser;
}

export default function UserInfo({ user }: UserInfoProps) {
  const { name, address, email } = user;

  return (
    <>
      <Paper p="xl" shadow="xs">
        <Avatar src={null} size={120} radius={120} mx="auto" color="blue">
          JD
        </Avatar>
        <Text align="center" size="lg" weight={500} mt="md">
          {name}
        </Text>
        <Text align="center" size="sm">
          {email}
        </Text>
        <Text align="center" color="dimmed" size="sm">
          {address}
        </Text>
      </Paper>
      <Center p="xl">
        <Button radius="xl" color="red" onClick={() => AuthService.logOut()} rightIcon={<IconLogout />}>
          Logout
        </Button>
      </Center>
    </>
  );
}
