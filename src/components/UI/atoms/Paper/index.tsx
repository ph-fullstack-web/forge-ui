import React from 'react';
import {Paper as MantinePaper, PaperProps} from '@mantine/core';

export const Paper = (props: PaperProps) => {
  return <MantinePaper role="paper" {...props} />;
};
