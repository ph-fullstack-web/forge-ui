import {createContext} from 'react';

import {Activity, CECRequestStatus, Community, Position} from 'models/core';

export interface ReferenceDataContextProps {
  communityList: Community[];
  positionList: Position[];
  activityList: Activity[];
  cecRequestStatusList: CECRequestStatus[];
}

export const ReferenceDataContext = createContext<
  ReferenceDataContextProps | undefined
>(undefined);
