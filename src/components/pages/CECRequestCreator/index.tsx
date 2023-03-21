import React from 'react';
import {useNavigate} from 'react-router-dom';

import {CECRequestCreator as CECRequestCreateTemplate} from 'components/templates';
import {useAuthContext} from 'hooks';
import {
  useCECRequestListDataProvider,
  useReferenceDataProvider,
} from 'providers';
import {PagePaths} from 'routes/PagePaths';

export const CECRequestCreator = () => {
  const {activityList} = useReferenceDataProvider();

  const {
    actions: {addCECRequest},
  } = useCECRequestListDataProvider();

  const {userDetails, employeeDetails} = useAuthContext();

  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(PagePaths.CECTracker);
  };

  return (
    <CECRequestCreateTemplate
      activityList={activityList}
      userId={userDetails?.userId ?? ''}
      approverName={employeeDetails?.managerName ?? ''}
      onBackClick={handleBackClick}
      onAddCECRequest={addCECRequest}
    />
  );
};
