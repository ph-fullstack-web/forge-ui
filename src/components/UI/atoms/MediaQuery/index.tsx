import React from 'react';
import {MediaQuery as MantineMediaQuery, MediaQueryProps} from '@mantine/core';

export const MediaQuery = (props: MediaQueryProps) => {
  return <MantineMediaQuery {...props} />;
};
