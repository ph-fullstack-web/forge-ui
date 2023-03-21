import React from 'react';
import {DataCard} from 'components/UI/molecules';
import {CECRequest} from 'models/core';
import {ActivityTable} from 'components/UI/organisms';
import {TableActions} from 'lib/constants';

interface CECPendingApprovalTemplateProps {
  pendingList?: CECRequest[];
}

export const CECPendingApproval = ({
  pendingList,
}: CECPendingApprovalTemplateProps) => {
  return (
    <>
      <DataCard
        headerText={'Total for Approval'}
        additionalText={pendingList?.length.toString()}
        withIcon={false}
      />
      <ActivityTable
        activities={pendingList ?? []}
        disableEditButton={true}
        actionLabel={TableActions.Review}
      />
    </>
  );
};
