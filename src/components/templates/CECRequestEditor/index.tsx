import React from 'react';

import {CECRequestEditForm} from 'components/UI/organisms';
import {Activity, CECRequest, CECRequestAttachment} from 'models/core';

interface CECRequestEditorProps {
  cecRequest: CECRequest;
  activityList: Activity[];
  approverName: string;
  onUpdateCECRequest: (
    updatedCECRequest: CECRequest,
    newAttachments: File[],
    onSuccess: () => void,
    onFailure: () => void
  ) => void;
  onDeleteCECRequestAttachment: (
    updatedCECRequest: CECRequest,
    attachment: CECRequestAttachment,
    onSuccess: () => void,
    onFailure: () => void
  ) => void;
  onBackClick: () => void;
}

export const CECRequestEditor = ({
  cecRequest,
  activityList,
  approverName,
  onUpdateCECRequest,
  onDeleteCECRequestAttachment,
  onBackClick,
}: CECRequestEditorProps) => {
  return (
    <CECRequestEditForm
      cecRequest={cecRequest}
      activityList={activityList}
      approverName={approverName}
      onUpdateCECRequest={onUpdateCECRequest}
      onDeleteCECRequestAttachment={onDeleteCECRequestAttachment}
      onBackClick={onBackClick}
    />
  );
};
