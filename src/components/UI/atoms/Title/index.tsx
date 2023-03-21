import React from 'react';
import {createStyles, Title as MantineTitle, TitleProps} from '@mantine/core';

const useStyles = createStyles(theme => ({
  text: {
    color:
      theme.colorScheme === 'dark'
        ? theme.colors['csv-gray'][3]
        : theme.colors['csv-blue'][3],
  },
}));

export const Title = ({className, ...props}: TitleProps) => {
  const {classes} = useStyles();

  return <MantineTitle className={`${classes.text} ${className}`} {...props} />;
};
