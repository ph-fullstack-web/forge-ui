import React from 'react';
import {List, ThemeIcon, useMantineTheme} from '@mantine/core';
import {IconBell} from '@tabler/icons';

import {Group, Text} from 'components/UI/atoms';

export const OngoingActivities = () => {
  const theme = useMantineTheme();
  return (
    <div>
      <Group mb="md">
        <Text size="md" weight="bold" align="center">
          On-going activities to gain CEC points
        </Text>
      </Group>
      <Group>
        <List
          spacing="xs"
          size="sm"
          center
          sx={{
            span: {
              lineHeight: '1.25rem',
            },
          }}
          c={theme.colorScheme === 'dark' ? 'csv-gray.3' : 'csv-blue.3'}
          icon={
            <ThemeIcon color="teal" size={24} radius="xl">
              <IconBell size={16} />
            </ThemeIcon>
          }
        >
          <List.Item>Join CEC Tracker internal development team</List.Item>
          <List.Item>
            Join Community Tracker internal project development team
          </List.Item>
          <List.Item>Enroll to various master classes</List.Item>
          <List.Item>Complete relevant UDemy courses</List.Item>
        </List>
      </Group>
    </div>
  );
};
