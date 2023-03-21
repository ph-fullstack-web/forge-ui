import React from 'react';
import {
  Notification as MantineNotification,
  NotificationProps,
} from '@mantine/core';

export const Notification = (props: NotificationProps) => {
  return <MantineNotification {...props} />;
};
