import {SelectItem} from '@mantine/core';
import {Position} from 'models/core';

export const getPositionList = (): Position[] => {
  const positionList: Position[] = [
    'Jr. Software Engineer',
    'Software Engineer',
    'Sr. Software Engineer 1',
    'Sr. Software Engineer 2',
    'Lead Software Engineer',
    'Principal Software Engineer',
    'Chief Software Engineer',
    'Distinguished Software Engineer',
  ];

  return positionList.sort();
};

export const getPositionListAsDropdown = (positions: Position[]) => {
  const dropdownItems: SelectItem[] = [];

  if (positions) {
    positions.forEach(position => {
      dropdownItems.push({value: position, label: position});
    });
  }

  return dropdownItems;
};
