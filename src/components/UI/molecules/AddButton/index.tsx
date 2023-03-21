import React from 'react';
import {IconPlus} from '@tabler/icons';

import {ActionIcon, ActionIconProps} from 'components/UI/atoms';

export const AddButton = (rest: ActionIconProps) => {
  return (
    <ActionIcon {...rest}>
      <IconPlus />
    </ActionIcon>
  );
};
