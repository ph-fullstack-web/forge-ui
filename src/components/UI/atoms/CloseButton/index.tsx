import React from 'react';
import {
  CloseButton as MantineCloseButton,
  CloseButtonProps,
} from '@mantine/core';

export const CloseButton = (props: CloseButtonProps) => {
  return <MantineCloseButton {...props} />;
};
