import React from 'react';
import {useMantineTheme} from '@mantine/core';
import {IconAlertTriangle, IconInfoCircle} from '@tabler/icons';

import {
  Button,
  Group,
  Modal as AtomModal,
  ModalProps as AtomModalProps,
  Stack,
  Text,
} from 'components/UI/atoms';
import {ModalType} from 'lib/constants';

interface ModalProps extends AtomModalProps {
  title: string;
  message: string;
  type?: ModalType;
  confirmButtonText?: string;
  cancelButtonText?: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export const Modal = ({
  title,
  message,
  confirmButtonText = 'Confirm',
  cancelButtonText = 'Cancel',
  type = ModalType.Information,
  onConfirm,
  onCancel,
  ...rest
}: ModalProps) => {
  const theme = useMantineTheme();

  const handleConfirm = () => onConfirm();
  const handleCancel = () => onCancel();

  return (
    <AtomModal withCloseButton={false} centered {...rest}>
      <Stack align="center">
        {type === ModalType.Warning && (
          <IconAlertTriangle size={60} color={theme.colors.orange[3]} />
        )}
        {type === ModalType.Information && (
          <IconInfoCircle size={60} color={theme.colors.blue[3]} />
        )}
        <Stack spacing="xs" align="center">
          <Text fz="xl" fw="700" ta="center">
            {title}
          </Text>
          <Text ta="center">{message}</Text>
        </Stack>
      </Stack>
      <Group position="center" mt="xl">
        <Button variant="outline" onClick={handleCancel}>
          {cancelButtonText}
        </Button>
        <Button onClick={handleConfirm}>{confirmButtonText}</Button>
      </Group>
    </AtomModal>
  );
};
