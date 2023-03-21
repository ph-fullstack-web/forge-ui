import React from 'react';
import {Employee} from 'models/core';
import {AccountDetailsView} from 'components/UI/organisms/Account';

type AccountDetailsTemplateProps = {
  accountDetails: Employee;
};

export const AccountDetailsTemplate = ({
  accountDetails,
}: AccountDetailsTemplateProps) => {
  return <AccountDetailsView accountDetails={accountDetails} />;
};
