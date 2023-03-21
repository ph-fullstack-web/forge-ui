import React from 'react';
import {Box as MantineBox, BoxProps} from '@mantine/core';

export const Box = (props: BoxProps) => {
  return <MantineBox role="box" {...props} />;
};
