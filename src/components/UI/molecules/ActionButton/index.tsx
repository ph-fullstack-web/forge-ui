import React from 'react';

import {Button, ButtonProps} from 'components/UI/atoms';

interface ActionButtonProps extends ButtonProps {
  actionLabel?: string;
  onClick?: () => void;
}

export const ActionButton = ({
  onClick,
  actionLabel,
  ...rest
}: ActionButtonProps) => {
  return (
    <Button onClick={onClick} variant="light" radius="xl" size="xs" {...rest}>
      {actionLabel}
    </Button>
  );
};
