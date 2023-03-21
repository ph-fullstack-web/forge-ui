import React from 'react';
import {CECPendingApproval as TemplateCECPendingApproval} from 'components/templates';
import {useCECRequestListDataProvider} from 'providers';

export const CECPendingApproval = () => {
  const {pendingCECRequestList} = useCECRequestListDataProvider();

  return <TemplateCECPendingApproval pendingList={pendingCECRequestList} />;
};
