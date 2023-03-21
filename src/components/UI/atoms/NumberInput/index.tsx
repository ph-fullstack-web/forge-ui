import React from 'react';
import {
  NumberInput as MantineNumberInput,
  NumberInputProps,
} from '@mantine/core';

export const NumberInput = (props: NumberInputProps) => {
  return <MantineNumberInput autoComplete="off" {...props} />;
};
