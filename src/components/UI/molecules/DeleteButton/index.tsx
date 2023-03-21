import React from 'react';
import {IconTrash} from '@tabler/icons';

import {ActionIcon, ActionIconProps} from 'components/UI/atoms';

export const DeleteButton = (rest: ActionIconProps) => {
  return (
    <ActionIcon {...rest}>
      <IconTrash />
    </ActionIcon>
  );
};
