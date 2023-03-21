import React from 'react';
import {TextInput as MantineTextInput, TextInputProps} from '@mantine/core';

export const TextInput = (props: TextInputProps) => {
  return <MantineTextInput autoComplete="off" {...props} />;
};
