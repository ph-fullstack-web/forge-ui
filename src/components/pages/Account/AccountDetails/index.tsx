import React from 'react';

import {AccountDetailsTemplate} from 'components/templates/Account';
import {useAuthContext} from 'hooks';

export const AccountDetailsPage = () => {
  const {employeeDetails} = useAuthContext();

  if (employeeDetails)
    return <AccountDetailsTemplate accountDetails={employeeDetails} />;

  return <>Details not found</>;
};
