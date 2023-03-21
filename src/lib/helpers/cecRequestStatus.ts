import {SelectItem} from '@mantine/core';
import {CECRequestStatus} from 'models/core';

export const getCECRequestStatusList = (): CECRequestStatus[] => {
  const cecRequestStatusList: CECRequestStatus[] = [
    'Approved',
    'Draft',
    'Pending for Approval',
    'Rejected',
  ];

  return cecRequestStatusList.sort();
};

export const getCECRequestStatusListAsDropdown = (
  cecRequestStatuses: CECRequestStatus[]
) => {
  const dropdownItems: SelectItem[] = [];

  if (cecRequestStatuses) {
    cecRequestStatuses.forEach(cecRequestStatus => {
      dropdownItems.push({value: cecRequestStatus, label: cecRequestStatus});
    });
  }

  return dropdownItems;
};
