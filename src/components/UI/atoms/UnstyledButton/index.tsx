import React, {forwardRef} from 'react';
import {
  createPolymorphicComponent,
  UnstyledButton as MantineUnstyledButton,
  UnstyledButtonProps,
} from '@mantine/core';

const _UnstyledButton = forwardRef<HTMLButtonElement, UnstyledButtonProps>(
  ({children, ...others}, ref) => (
    <MantineUnstyledButton component="button" ref={ref} {...others}>
      {children}
    </MantineUnstyledButton>
  )
);

export const UnstyledButton = createPolymorphicComponent<
  'button',
  UnstyledButtonProps
>(_UnstyledButton);
