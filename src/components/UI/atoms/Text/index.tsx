import React, {forwardRef} from 'react';
import {
  createPolymorphicComponent,
  Text as MantineText,
  TextProps,
} from '@mantine/core';

const _Text = forwardRef<HTMLDivElement, TextProps>(
  ({children, ...others}, ref) => (
    <MantineText
      sx={theme => ({
        color: others.color
          ? others.color
          : theme.colorScheme === 'dark'
          ? theme.colors['csv-gray'][3]
          : theme.colors['csv-blue'][3],
      })}
      component="div"
      ref={ref}
      {...others}
    >
      {children}
    </MantineText>
  )
);

export const Text = createPolymorphicComponent<'div', TextProps>(_Text);
