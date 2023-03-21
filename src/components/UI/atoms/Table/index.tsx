import React from 'react';
import {
  Table as MantineTable,
  TableProps as MantineTableProps,
} from '@mantine/core';

export type TableProps = MantineTableProps;

export const Table = (props: TableProps) => {
  return <MantineTable verticalSpacing="xs" {...props} />;
};
