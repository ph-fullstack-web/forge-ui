import {SelectItem} from '@mantine/core';
import {Employee} from 'models/core';

export const formatName = (firstName: string, lastName: string) => {
  return `${lastName}, ${firstName}`;
};

export const getManagerListAsDropdown = (employees: Employee[]) => {
  const dropdownItems: SelectItem[] = [];

  if (employees) {
    employees.forEach(employee => {
      dropdownItems.push({
        value: employee.employeeId,
        label: formatName(employee.firstName, employee.lastName),
      });
    });
  }

  return dropdownItems;
};
