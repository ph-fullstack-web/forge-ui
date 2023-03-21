import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';

import {CECRequestView as CECRequestViewTemplate} from 'components/templates';
import {useAuthContext} from 'hooks';
import {CECRequestStatus} from 'lib/constants';
import {CECRequest} from 'models/core';
import {useCECRequestDataProvider} from 'providers';
import {PagePaths} from 'routes/PagePaths';

export const CECRequestView = () => {
  const [cecRequest, setCECRequest] = useState<CECRequest | undefined>();

  const {selectedCECRequest} = useCECRequestDataProvider();

  const {employeeDetails} = useAuthContext();

  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(PagePaths.CECTracker);
  };

  useEffect(() => {
    setCECRequest(selectedCECRequest);
  }, [selectedCECRequest]);

  if (!cecRequest || cecRequest.status !== CECRequestStatus.Pending)
    return <>Invalid CEC Request</>;

  return (
    <CECRequestViewTemplate
      cecRequest={cecRequest}
      approverName={employeeDetails?.managerName ?? ''}
      onBackClick={handleBackClick}
    />
  );
};
