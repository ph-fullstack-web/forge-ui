import {showNotification} from '@mantine/notifications';

import {NotificationType} from 'lib/constants';

export const useNotification = () => {
  const notify = (type: NotificationType, message: string) => {
    showNotification({
      message,
      title: type === NotificationType.Success ? 'Success' : 'Error',
      color: type === NotificationType.Success ? 'green' : 'red',
    });
  };

  return notify;
};
