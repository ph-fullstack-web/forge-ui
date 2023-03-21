import React, {forwardRef} from 'react';
import {
  Button as MantineButton,
  ButtonProps as MantineButtonProps,
  createPolymorphicComponent,
  MantineTheme,
} from '@mantine/core';

export type ButtonProps = MantineButtonProps;

const _Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({children, ...others}, ref) => {
    const getStyle = (theme: MantineTheme) => {
      if (!others.variant && !others.color) {
        return {
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors['csv-plum'][1]
              : theme.colors['csv-blue'][2],
          color:
            theme.colorScheme === 'dark'
              ? theme.colors['csv-gray'][0]
              : theme.white,
        };
      } else if (others.variant === 'outline') {
        return {
          borderColor:
            theme.colorScheme === 'dark'
              ? theme.colors['csv-gray'][3]
              : theme.colors['csv-blue'][2],
          color:
            theme.colorScheme === 'dark'
              ? theme.colors['csv-gray'][3]
              : theme.colors['csv-blue'][2],
        };
      } else if (others.variant === 'light') {
        return {
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors['csv-gray'][4]
              : theme.colors['csv-blue'][0],
          color:
            theme.colorScheme === 'dark'
              ? theme.colors['csv-gray'][2]
              : theme.colors['csv-plum'][2],
        };
      }
      return {};
    };
    return (
      <MantineButton
        sx={theme => getStyle(theme)}
        component="button"
        ref={ref}
        {...others}
      >
        {children}
      </MantineButton>
    );
  }
);

export const Button = createPolymorphicComponent<'button', ButtonProps>(
  _Button
);
