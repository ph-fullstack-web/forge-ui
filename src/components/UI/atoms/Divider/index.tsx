import React from 'react';
import {Divider as MantineDivider, DividerProps} from '@mantine/core';

export const Divider = (props: DividerProps) => {
  return <MantineDivider role="divider" {...props} />;
};
