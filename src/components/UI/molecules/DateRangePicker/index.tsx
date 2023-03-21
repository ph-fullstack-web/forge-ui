import React from 'react';
import {createStyles} from '@mantine/core';
import dayjs from 'dayjs';

import {DatePicker, Group} from 'components/UI/atoms';

const useStyles = createStyles(theme => ({
  group: {
    [`@media (min-width: ${theme.breakpoints.xs}px)`]: {
      flexWrap: 'nowrap',
    },
  },
  datePicker: {
    [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
      height: 'unset',
      width: '100%',
    },
    [`@media (min-width: ${theme.breakpoints.xs}px)`]: {
      height: '100%',
    },
  },
}));

interface DateRangePickerProps {
  dateStart: string;
  dateEnd: string;
  dateStartError?: string;
  dateEndError?: string;
  readonly?: boolean;
  onDateStartChange?: (value: Date | null) => void;
  onDateEndChange?: (value: Date | null) => void;
}

export const DateRangePicker = ({
  dateStart,
  dateEnd,
  dateStartError,
  dateEndError,
  readonly,
  onDateStartChange,
  onDateEndChange,
}: DateRangePickerProps) => {
  const {classes} = useStyles();

  return (
    <Group className={classes.group}>
      <DatePicker
        label="Date Started"
        name="dateStarted"
        width="200px"
        className={classes.datePicker}
        maxDate={dayjs(new Date()).toDate()}
        value={dateStart ? dayjs(dateStart).toDate() : null}
        onChange={onDateStartChange}
        error={dateStartError}
        readOnly={readonly}
      />
      <DatePicker
        label="Date Completed"
        className={classes.datePicker}
        maxDate={dayjs(new Date()).toDate()}
        value={dateEnd ? dayjs(dateEnd).toDate() : null}
        name="dateCompleted"
        onChange={onDateEndChange}
        error={dateEndError}
        readOnly={readonly}
      />
    </Group>
  );
};
