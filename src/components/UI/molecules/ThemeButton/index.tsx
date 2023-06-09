import React from 'react';
import {useMantineColorScheme} from '@mantine/core';
import {IconSun, IconMoon} from '@tabler/icons';

import {Box, Center, Group, SegmentedControl} from 'components/UI/atoms';

export const ThemeButton = () => {
  const {colorScheme, toggleColorScheme} = useMantineColorScheme();

  return (
    <Group position="center">
      <SegmentedControl
        value={colorScheme}
        onChange={(value: 'light' | 'dark') => toggleColorScheme(value)}
        data={[
          {
            value: 'light',
            label: (
              <Center>
                <IconSun size={16} stroke={1.5} />
                <Box ml={10}>Light</Box>
              </Center>
            ),
          },
          {
            value: 'dark',
            label: (
              <Center>
                <IconMoon size={16} stroke={1.5} />
                <Box ml={10}>Dark</Box>
              </Center>
            ),
          },
        ]}
      />
    </Group>
  );
};
