import React from 'react';

import {Button, Group} from 'components/UI/atoms';

interface FormButtonGroupProps {
  firstButtonLabel?: string;
  secondButtonLabel?: string;
  disabled?: boolean;
  onBackClick: () => void;
  onFirstButtonClick?: () => void;
  onSecondButtonClick?: () => void;
}

export const FormButtonGroup = ({
  firstButtonLabel,
  secondButtonLabel,
  disabled,
  onFirstButtonClick,
  onSecondButtonClick,
  onBackClick,
}: FormButtonGroupProps) => {
  return (
    <Group position="apart">
      <Button onClick={onBackClick} variant="outline" mt="lg">
        Back
      </Button>
      <Group>
        {secondButtonLabel && (
          <Button
            onClick={onSecondButtonClick}
            mt="lg"
            color="orange"
            type="submit"
            disabled={disabled}
          >
            {secondButtonLabel}
          </Button>
        )}
        {firstButtonLabel && (
          <Button
            onClick={onFirstButtonClick}
            mt="lg"
            type="submit"
            disabled={disabled}
          >
            {firstButtonLabel}
          </Button>
        )}
      </Group>
    </Group>
  );
};
