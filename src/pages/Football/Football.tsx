import { Container, Title, Text, Group, Skeleton, Stack, Table, Avatar, Badge } from '@mantine/core';
import { useQuery } from 'react-query';
import { mockFootballStandingsApi } from 'services/api';

export default function Football(): JSX.Element {
  const { data: footballResp, isLoading } = useQuery('mockFootballStandings', () => mockFootballStandingsApi(), {
    cacheTime: Infinity,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  const data = footballResp?.data?.data || {};

  const { name, seasonDisplay } = data;

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

  const standings = data?.standings?.map((s: any) => {
    const rank = s.stats.find((t: any) => t.type === 'rank');
    const win = s.stats.find((t: any) => t.type === 'wins');
    const loss = s.stats.find((t: any) => t.type === 'losses');
    const draw = s.stats.find((t: any) => t.type === 'ties');
    const points = s.stats.find((t: any) => t.type === 'points');

    return {
      team: s.team.displayName,
      logo: s.team.logos?.length ? s.team.logos[0].href : null,
      rank: rank?.value,
      stat: `${win?.value}/${loss?.value}/${draw?.value}`,
      points: points?.value,
    };
  });

  const rows = standings?.map((item: any) => (
    <tr key={item.name}>
      <td>
        <Badge color={item.rank < 18 ? 'blue' : 'red'} variant={item.rank < 5 ? 'filled' : 'outline'}>
          {item.rank}
        </Badge>
      </td>
      <td>
        <Group spacing="sm">
          <Avatar size={30} src={item.logo} radius={30} />
          <Text size="sm" weight={500}>
            {item.team}
          </Text>
        </Group>
      </td>
      <td>{item.stat}</td>
      <td>{item.points}</td>
    </tr>
  ));

  return (
    <div>
      <Container size="sm">
        <Title align="center">{name}</Title>
        <Text align="center">Season: {seasonDisplay}</Text>

        <Table sx={{ minWidth: 800 }} verticalSpacing="sm">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Team</th>
              <th>W/L/D</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </Container>
    </div>
  );
}
