import { Avatar, Paper, Text } from '@mantine/core';
import { IUser } from 'interfaces/auth';

export interface UserInfoProps {
  user: IUser;
}

export default function UserInfo({ user }: UserInfoProps) {
  const { name, address } = user;

  return (
    <>
      <Paper>
        <Avatar src={null} size={120} radius={120} mx="auto">
          JD
        </Avatar>
        <Text align="center" size="lg" weight={500} mt="md">
          {name}
        </Text>
        <Text align="center" color="dimmed" size="sm">
          {address}
        </Text>
      </Paper>
    </>
  );
}
