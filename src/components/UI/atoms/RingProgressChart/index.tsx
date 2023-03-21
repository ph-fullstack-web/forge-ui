import React from 'react';
import {
  RingProgress as MantineRingProgress,
  RingProgressProps,
} from '@mantine/core';

export const RingProgressChart = (props: RingProgressProps) => {
  return <MantineRingProgress {...props} />;
};
