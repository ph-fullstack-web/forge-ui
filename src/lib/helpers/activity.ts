import {SelectItem} from '@mantine/core';
import {Activity} from 'models/core';

export const getActivityListAsDropdown = (activities: Activity[]) => {
  const dropdownItems: SelectItem[] = [];

  if (activities) {
    activities
      .sort((a, b) => a.name.localeCompare(b.name))
      .forEach(activity => {
        dropdownItems.push({
          value: activity.activityId.toString(),
          label: `${activity.name} - ${activity.points} ${
            activity.points === 1 ? 'point' : 'points'
          }`,
          group: activity.activityCategory,
        });
      });
  }

  return dropdownItems;
};
