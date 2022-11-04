import { Accordion, Container, Group, Skeleton, Stack, Text, Title, createStyles } from '@mantine/core';
import { useQuery } from '@tanstack/react-query';
import { mockRandomQuotesApi } from 'services/api';

const useStyles = createStyles((theme, _params, getRef) => {
  const control = getRef('control');

  return {
    wrapper: {
      paddingTop: theme.spacing.xl * 2,
      paddingBottom: theme.spacing.xl * 2,
      minHeight: 650,
    },
    title: {
      fontWeight: 400,
      marginBottom: theme.spacing.xl * 1.5,
    },
    control: {
      ref: control,

      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
    item: {
      borderRadius: theme.radius.md,
      marginBottom: theme.spacing.lg,
      border: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[3]}`,
    },
    itemOpened: {
      [`& .${control}`]: {
        color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 6],
      },
    },
  };
});

interface AccordionLabelProps {
  anime: string;
  character: string;
}

function AccordionLabel({ anime, character }: AccordionLabelProps) {
  return (
    <Group noWrap>
      <Text>{character}</Text>
      <Text size="sm" color="dimmed" weight={400}>
        {anime}
      </Text>
    </Group>
  );
}

export default function Quotes(): JSX.Element {
  const { classes } = useStyles();

  const { data: quotesResp, isLoading } = useQuery(['mockRandomQuotes'], () => mockRandomQuotesApi(), {
    cacheTime: Infinity,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  const quotes = quotesResp?.data || [];

  if (isLoading) {
    return (
      <Container size="sm">
        <Stack>
          <Skeleton height={96} radius="xs" />
          <Skeleton height={48} radius="xs" />
          <Skeleton height={48} radius="xs" />
        </Stack>
      </Container>
    );
  }

  const items = quotes?.map((q: any) => (
    <Accordion.Item key={q.quote} value={q.quote}>
      <Accordion.Control>
        <AccordionLabel {...q} />
      </Accordion.Control>
      <Accordion.Panel>{q.quote}</Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <div className={classes.wrapper}>
      <Container size="sm">
        <Title align="center" className={classes.title}>
          Random Quotes
        </Title>
        <Accordion
          multiple
          classNames={{
            item: classes.item,
            control: classes.control,
          }}
        >
          {items}
        </Accordion>
      </Container>
    </div>
  );
}
