import React from 'react';
import {createStyles} from '@mantine/core';
import {Button, ButtonProps} from 'components/UI/atoms';

interface CollapseButtonProps extends ButtonProps {
  onClick?: () => void;
}

const useStyles = createStyles(theme => ({
  button: {
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[3]
        : theme.colors.gray[2],
    color: 'black',
    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[0]
          : theme.colors.gray[4],
    },
    width: '100px',
  },
}));

export const CollapseButton = ({onClick, ...rest}: CollapseButtonProps) => {
  const {classes} = useStyles();
  return (
    <Button
      onClick={onClick}
      variant="light"
      size="xs"
      {...rest}
      className={classes.button}
    />
  );
};
