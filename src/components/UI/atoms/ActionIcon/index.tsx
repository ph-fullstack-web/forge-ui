import React from 'react';
import {
  ActionIcon as MantineActionIcon,
  ActionIconProps as MantineActionIconProps,
} from '@mantine/core';

export type ActionIconProps = MantineActionIconProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export const ActionIcon = (props: ActionIconProps) => {
  return <MantineActionIcon {...props} />;
};
