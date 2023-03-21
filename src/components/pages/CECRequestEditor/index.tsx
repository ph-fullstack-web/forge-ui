import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';

import {CECRequestEditor as CECRequestEditorTemplate} from 'components/templates';
import {useAuthContext} from 'hooks';
import {CECRequestStatus} from 'lib/constants';
import {CECRequest} from 'models/core';
import {
  useCECRequestDataProvider,
  useCECRequestListDataProvider,
  useReferenceDataProvider,
} from 'providers';
import {PagePaths} from 'routes/PagePaths';

export const CECRequestEditor = () => {
  const [cecRequest, setCECRequest] = useState<CECRequest | undefined>();

  const {activityList} = useReferenceDataProvider();

  const {
    actions: {updateCECRequest, deleteCECRequestAttachment},
  } = useCECRequestListDataProvider();

  const {selectedCECRequest} = useCECRequestDataProvider();

  const {employeeDetails} = useAuthContext();

  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(PagePaths.CECTracker);
  };

  useEffect(() => {
    setCECRequest(selectedCECRequest);
  }, [selectedCECRequest]);

  if (!cecRequest || cecRequest.status !== CECRequestStatus.Draft)
    return <>Invalid CEC Request</>;

  return (
    <CECRequestEditorTemplate
      cecRequest={cecRequest}
      activityList={activityList}
      approverName={employeeDetails?.managerName ?? ''}
      onBackClick={handleBackClick}
      onUpdateCECRequest={updateCECRequest}
      onDeleteCECRequestAttachment={deleteCECRequestAttachment}
    />
  );
};
