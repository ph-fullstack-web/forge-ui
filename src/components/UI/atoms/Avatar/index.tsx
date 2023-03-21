import React from 'react';
import {Avatar as MantineAvatar, AvatarProps} from '@mantine/core';

export const Avatar = (props: AvatarProps) => {
  return <MantineAvatar role="avatar" {...props} />;
};
