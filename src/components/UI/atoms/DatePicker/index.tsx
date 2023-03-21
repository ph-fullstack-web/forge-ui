import React from 'react';
import {DatePicker as MantineDatePicker, DatePickerProps} from '@mantine/dates';
import {IconCalendar} from '@tabler/icons';

export const DatePicker = (props: DatePickerProps) => {
  return (
    <MantineDatePicker
      firstDayOfWeek="sunday"
      icon={<IconCalendar size={16} />}
      {...props}
    />
  );
};
