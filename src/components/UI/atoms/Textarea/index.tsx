import React from 'react';
import {Textarea as MantineTextarea, TextareaProps} from '@mantine/core';

export const Textarea = (props: TextareaProps) => {
  return <MantineTextarea {...props} />;
};
