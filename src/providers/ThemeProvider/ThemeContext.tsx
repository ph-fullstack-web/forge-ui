import {createContext} from 'react';
import {ColorScheme} from '@mantine/core';

export interface ThemeContextProps {
  toggleColorScheme: (value?: ColorScheme) => void;
  colorScheme: ColorScheme;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(
  undefined
);
