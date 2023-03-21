import React, {useState} from 'react';
import {ColorScheme, ColorSchemeProvider, MantineProvider} from '@mantine/core';
import {NotificationsProvider} from '@mantine/notifications';

import {AuthContextProvider} from 'context';
import {ReferenceDataProvider} from 'providers/ReferenceDataProvider';

type AppProvidersProps = ComponentWithChildren;

export const AppProvider = ({children}: AppProvidersProps) => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{
          colorScheme,
          colors: {
            'csv-blue': ['#92BBE6', '#6AA2DC', '#2F78C4', '#000048'],
            'csv-plum': ['#85A0F9', '#7373D8', '#2E308E'],
            'csv-teal': ['#97F5F7', '#26EFE9', '#06C7CC'],
            'csv-gray': ['#F6F6F5', '#EFEFEE', '#D0D0CE', '#97999B', '#53565A'],
            'csv-red': ['#B81F2D'],
            'csv-yellow': ['#E9C71D'],
          },
        }}
        withNormalizeCSS
        withGlobalStyles
      >
        <NotificationsProvider position="top-right">
          <AuthContextProvider>
            <ReferenceDataProvider>{children}</ReferenceDataProvider>
          </AuthContextProvider>
        </NotificationsProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  );
};
