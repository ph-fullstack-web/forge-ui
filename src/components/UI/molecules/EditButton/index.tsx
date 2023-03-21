import React from 'react';

import {Button, ButtonProps} from 'components/UI/atoms';

interface EditButtonProps extends ButtonProps {
  onClick?: () => void;
}

export const EditButton = ({onClick, ...rest}: EditButtonProps) => {
  return (
    <Button onClick={onClick} variant="light" radius="xl" size="xs" {...rest}>
      Edit
    </Button>
  );
};
