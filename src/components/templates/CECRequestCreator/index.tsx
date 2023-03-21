import React from 'react';

import {CECRequestCreateForm} from 'components/UI/organisms';
import {PageLoader} from 'components/UI/molecules';
import {Activity, CECRequest} from 'models/core';

interface CECCreatorProps {
  activityList: Activity[];
  userId: string;
  approverName: string;
  onAddCECRequest: (
    newCECRequest: CECRequest,
    attachments: File[],
    onSuccess: () => void,
    onFailure: () => void
  ) => void;
  onBackClick: () => void;
}

export const CECRequestCreator = ({
  activityList,
  userId,
  approverName,
  onAddCECRequest,
  onBackClick,
}: CECCreatorProps) => {
  if (!activityList || !activityList.length) return <PageLoader />;

  return (
    <CECRequestCreateForm
      activityList={activityList}
      userId={userId}
      approverName={approverName}
      onAddCECRequest={onAddCECRequest}
      onBackClick={onBackClick}
    />
  );
};
