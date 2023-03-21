import React from 'react';
import {
  BackgroundImage as MantineBackgroundImage,
  BackgroundImageProps,
} from '@mantine/core';

export const BackgroundImage = (props: BackgroundImageProps) => {
  return <MantineBackgroundImage {...props} />;
};
