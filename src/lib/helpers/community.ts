import {SelectItem} from '@mantine/core';
import {Community} from 'models/core';

export const getCommunityListAsDropdown = (communities: Community[]) => {
  const dropdownItems: SelectItem[] = [];

  if (communities) {
    communities.forEach(community => {
      dropdownItems.push({value: community.id, label: community.name});
    });
  }

  return dropdownItems;
};
