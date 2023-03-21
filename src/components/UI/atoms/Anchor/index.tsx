import React from 'react';
import {
  Anchor as MantineAnchor,
  AnchorProps as MantineAnchorProps,
} from '@mantine/core';

interface AnchorProps extends MantineAnchorProps {
  link: string;
}

export const Anchor = ({link, ...rest}: AnchorProps) => {
  return (
    <MantineAnchor
      component="a"
      href={link}
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
      }}
      {...rest}
    />
  );
};
