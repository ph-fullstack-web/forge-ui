import React from 'react';
import {Loader as MantineLoader, LoaderProps} from '@mantine/core';

export const Loader = (props: LoaderProps) => {
  return <MantineLoader color="csv-blue.2" {...props} />;
};
