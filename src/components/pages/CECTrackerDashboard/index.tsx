import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';

import {CECTrackerDashboardTemplate} from 'components/templates';
import {CECRequest} from 'models/core';
import {useCECRequestListDataProvider} from 'providers';
import {PagePaths} from 'routes/PagePaths';

export const CECTrackerDashboard = () => {
  const [approvedList, setApprovedCECs] = useState<CECRequest[] | undefined>(
    []
  );
  const [rejectedList, setRejectedCECs] = useState<CECRequest[] | undefined>(
    []
  );
  const [pendingList, setPendingCECs] = useState<CECRequest[] | undefined>([]);
  const [draftList, setDraftCECs] = useState<CECRequest[] | undefined>([]);
  const {
    currentCECPoints,
    pendingCECPoints,
    approvedCECRequestList,
    rejectedCECRequestList,
    pendingCECRequestList,
    draftCECRequestList,
    actions: {setSelectedCECRequestId, deleteCECRequest},
  } = useCECRequestListDataProvider();

  const navigate = useNavigate();

  const handleAddClick = () => {
    navigate(PagePaths.CECRequestCreator);
  };

  const handleDeleteClick = (cecRequestId: string) =>
    setSelectedCECRequestId(cecRequestId);

  const handleDeleteCECRequest = (
    onSuccess: () => void,
    onFailure: () => void
  ) => {
    deleteCECRequest(onSuccess, onFailure);
  };

  useEffect(() => {
    setApprovedCECs(approvedCECRequestList);
  }, [approvedCECRequestList]);

  useEffect(() => {
    setRejectedCECs(rejectedCECRequestList);
  }, [rejectedCECRequestList]);

  useEffect(() => {
    setPendingCECs(pendingCECRequestList);
  }, [pendingCECRequestList]);

  useEffect(() => {
    setDraftCECs(draftCECRequestList);
  }, [draftCECRequestList]);

  return (
    <CECTrackerDashboardTemplate
      currentCECPoints={currentCECPoints}
      pendingCECPoints={pendingCECPoints}
      approvedList={approvedList}
      pendingList={pendingList}
      rejectedList={rejectedList}
      draftList={draftList}
      onAddClick={handleAddClick}
      onDeleteClick={handleDeleteClick}
      onDeleteCECRequest={handleDeleteCECRequest}
    />
  );
};
