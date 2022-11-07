import { Card, Group, Switch, Text, createStyles } from '@mantine/core';

const mockData = {
  title: 'Configure notifications',
  description: 'Choose what notifications you want to receive',
  data: [
    {
      title: 'Messages',
      description: 'Direct messages you have received from other users',
    },
    {
      title: 'Review requests',
      description: 'Code review requests from your team members',
    },
    {
      title: 'Comments',
      description: 'Daily digest with comments on your posts',
    },
    {
      title: 'Recommendations',
      description: 'Digest with best community posts from previous week',
    },
  ],
};

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  item: {
    '& + &': {
      paddingTop: theme.spacing.sm,
      marginTop: theme.spacing.sm,
      borderTop: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]}`,
    },
  },

  switch: {
    '& *': {
      cursor: 'pointer',
    },
  },

  title: {
    lineHeight: 1,
  },
}));

export function SwitchesCard() {
  const { classes } = useStyles();
  const { title, description, data } = mockData;

  const items = data.map((item) => (
    <Group position="apart" className={classes.item} noWrap spacing="xl">
      <div>
        <Text>{item.title}</Text>
        <Text size="xs" color="dimmed">
          {item.description}
        </Text>
      </div>
      <Switch onLabel="ON" offLabel="OFF" className={classes.switch} size="lg" />
    </Group>
  ));

  return (
    <Card radius="md" p="xl" shadow="xs" className={classes.card}>
      <Text size="lg" className={classes.title} weight={500}>
        {title}
      </Text>
      <Text size="xs" color="dimmed" mt={3} mb="xl">
        {description}
      </Text>
      {items}
    </Card>
  );
}
