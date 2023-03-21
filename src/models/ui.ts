import {SelectItem as MantineSelectItem} from '@mantine/core';
import {TablerIcon} from '@tabler/icons';
import {TableRowDataType} from 'lib/constants';

import {CECRequestStatus} from './core';

export interface NavbarItemLink {
  link: string;
  label: string;
}

export interface NavbarItem extends NavbarItemLink {
  icon: TablerIcon;
  links?: NavbarItemLink[];
}

export interface IdName {
  id: string;
  name: string;
}

export interface EmployeeTableData {
  employeeId: string;
  firstName: string;
  lastName: string;
  fullName: string;
  softvisionEmail: string;
  dateHired: string;
  managerName: string;
  position: string;
  photoUrl: string;
}

export interface CECRequestTableData {
  cecRequestId: string;
  activityCategory: string;
  activityName: string;
  status: CECRequestStatus;
  cecPoints: number;
  dateCreated: string;
  dateCompleted: string;
}

export type TableRowData = EmployeeTableData &
  CECRequestTableData & {
    key: string;
    tableRowDataType: TableRowDataType;
  };

export type SelectItem = MantineSelectItem;
