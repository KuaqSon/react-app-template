import {
  Alert,
  Anchor,
  Button,
  Checkbox,
  Container,
  Group,
  Paper,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { showNotification } from '@mantine/notifications';
import { useMutation } from '@tanstack/react-query';
import { useRedirectFromUrl } from 'hooks/use-redirect-from-url';
import { useState } from 'react';
import { mockLoginApi } from 'services/api';
import * as AuthService from 'services/auth-service';

export default function Login(): JSX.Element {
  const [invalidPassword, setInvalidPassword] = useState<boolean>(false);
  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (value) => (value.length < 4 ? 'Has at least 6 characters' : null),
    },
  });

  const redirect = useRedirectFromUrl();

  const { mutate, isLoading } = useMutation(mockLoginApi, {
    onMutate: () => {
      setInvalidPassword(false);
    },
    onSuccess: async ({ status, data }) => {
      if (status === 200) {
        AuthService.saveToken(data.token);
        redirect();
      } else {
        setInvalidPassword(true);
      }
    },
    onError: () => {
      showNotification({
        id: 'login-error',
        title: 'Login failed!',
        message: 'Something went wrong please try again later!',
        color: 'red',
      });
    },
  });

  return (
    <>
      <Container size={420} mt="15vh" mb={40}>
        <Title align="center" sx={{ fontWeight: 900 }}>
          Welcome back!
        </Title>
        <Text color="dimmed" size="sm" align="center" mt={5}>
          Do not have an account yet?{' '}
          <Anchor<'a'> href="#" size="sm" onClick={(event) => event.preventDefault()}>
            Create account
          </Anchor>
        </Text>

        <Paper withBorder p={30} mt={30} radius="md">
          <form onSubmit={form.onSubmit((values) => mutate(values))} name="login-form">
            <TextInput
              label="Email"
              placeholder="Type: demo@demo.com"
              required
              disabled={isLoading}
              {...form.getInputProps('email')}
            />
            <PasswordInput
              label="Password"
              placeholder="Type: demo"
              required
              mt="md"
              description="Must include at least four letter, number and special character"
              disabled={isLoading}
              {...form.getInputProps('password')}
            />
            <Group position="apart" mt="md">
              <Checkbox label="Remember me" />
              <Anchor<'a'> onClick={(event) => event.preventDefault()} href="#" size="sm">
                Forgot password?
              </Anchor>
            </Group>
            <Button fullWidth mt="xl" type="submit" loading={isLoading}>
              Sign in
            </Button>
          </form>
          {invalidPassword && (
            <Alert title="Login Failed!" color="red" mt="xl">
              Incorrect Email or password!
            </Alert>
          )}
        </Paper>
      </Container>
    </>
  );
}
