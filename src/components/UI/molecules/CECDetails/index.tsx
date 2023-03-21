import React from 'react';
import {
  IconRotateClockwise,
  IconTallymarks,
  IconUserCheck,
} from '@tabler/icons';
import dayjs from 'dayjs';

import {Grid, Group, Paper, Stack, Text, Title} from 'components/UI/atoms';

interface CECDetailsProps {
  approvedCount?: number;
  pendingCount?: number;
  rejectedCount?: number;
  draftCount?: number;
}

export const CECDetails = ({
  approvedCount,
  pendingCount,
  rejectedCount,
  draftCount,
}: CECDetailsProps) => {
  const currentYear = dayjs().year();
  const totalCECPoints =
    (approvedCount ?? 0) +
    (pendingCount ?? 0) +
    (rejectedCount ?? 0) +
    (draftCount ?? 0);

  return (
    <Paper radius="md" p="md" withBorder>
      <Title order={3} mb="md">
        Continuous Education Credits
      </Title>
      <Grid pl="lg">
        <Grid.Col span={3}>
          <Stack spacing="xs">
            <Group spacing="xs">
              <IconRotateClockwise />
              <Text>
                June {currentYear} - June {currentYear + 1}
              </Text>
            </Group>
            <Group spacing="xs">
              <IconTallymarks />
              <Text>{totalCECPoints}</Text>
            </Group>
            <Group spacing="xs">
              <IconUserCheck />
              <Text>Gilbert Morales</Text>
            </Group>
          </Stack>
        </Grid.Col>
        <Grid.Col span={9}>
          <Group position="apart" grow>
            <Stack>
              <Title order={3} mb="xs">
                Total Approved
              </Title>
              <Title align="center">{approvedCount}</Title>
            </Stack>
            <Stack>
              <Title order={3} mb="xs">
                Total Pending
              </Title>
              <Title align="center">{pendingCount}</Title>
            </Stack>
            <Stack>
              <Title order={3} mb="xs">
                Total Rejected
              </Title>
              <Title align="center">{rejectedCount}</Title>
            </Stack>
            <Stack>
              <Title order={3} mb="xs">
                Total Draft
              </Title>
              <Title align="center">{draftCount}</Title>
            </Stack>
          </Group>
        </Grid.Col>
      </Grid>
    </Paper>
  );
};

export default CECDetails;
