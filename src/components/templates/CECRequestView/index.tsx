import React from 'react';

import {CECRequestViewForm} from 'components/UI/organisms';
import {CECRequest} from 'models/core';

interface CECRequestViewProps {
  cecRequest: CECRequest;
  approverName: string;
  onBackClick: () => void;
}

export const CECRequestView = ({
  cecRequest,
  approverName,
  onBackClick,
}: CECRequestViewProps) => {
  return (
    <CECRequestViewForm
      cecRequest={cecRequest}
      approverName={approverName}
      onBackClick={onBackClick}
    />
  );
};
