import React from 'react';
import {
  Modal as MantineModal,
  ModalProps as MantineModalProps,
} from '@mantine/core';

export type ModalProps = MantineModalProps;

export const Modal = (props: ModalProps) => {
  return <MantineModal {...props} />;
};
