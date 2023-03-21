import React from 'react';
import {
  SegmentedControl as MantineSegmentedControl,
  SegmentedControlProps,
} from '@mantine/core';

export const SegmentedControl = (props: SegmentedControlProps) => {
  return <MantineSegmentedControl {...props} />;
};
