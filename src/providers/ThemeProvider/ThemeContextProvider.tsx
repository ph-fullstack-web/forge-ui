import React, {useState} from 'react';
import {ColorScheme} from '@mantine/core';

import {ThemeContext} from './ThemeContext';

type ThemeContextProviderProps = ComponentWithChildren;

export const ThemeContextProvider = ({children}: ThemeContextProviderProps) => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');

  const handleToggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <ThemeContext.Provider
      value={{
        toggleColorScheme: handleToggleColorScheme,
        colorScheme: colorScheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
