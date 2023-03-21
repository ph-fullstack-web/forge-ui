import React from 'react';
import {Alert as MantineAlert, AlertProps} from '@mantine/core';

export const Alert = (props: AlertProps) => {
  return <MantineAlert {...props} />;
};
