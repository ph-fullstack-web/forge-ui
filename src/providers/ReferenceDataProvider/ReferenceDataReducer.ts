import {Activity, CECRequestStatus, Community, Position} from 'models/core';

export interface ReferenceDataState {
  communityList: Community[];
  positionList: Position[];
  activityList: Activity[];
  cecRequestStatusList: CECRequestStatus[];
  isCommunityDataLoading: boolean;
  isPositionDataLoading: boolean;
  isActivityDataLoading: boolean;
  isCecRequestStatusLoading: boolean;
}

export interface ReferenceDataPayload {
  communityList?: Community[];
  positionList?: Position[];
  activityList?: Activity[];
  cecRequestStatusList?: CECRequestStatus[];
}

export enum ReferenceDataActionTypes {
  LoadComplete,
  SetCommunityList,
  SetPositionList,
  SetActivityList,
  SetCECRequestStatusList,
}

export type ReferenceDataAction = {
  type: ReferenceDataActionTypes;
  payload: ReferenceDataPayload;
};

export const initialReferenceDataState: ReferenceDataState = {
  communityList: [],
  positionList: [],
  activityList: [],
  cecRequestStatusList: [],
  isCommunityDataLoading: true,
  isPositionDataLoading: true,
  isActivityDataLoading: true,
  isCecRequestStatusLoading: true,
};

export const referenceDataReducer = (
  state: ReferenceDataState,
  action: ReferenceDataAction
): ReferenceDataState => {
  switch (action.type) {
    case ReferenceDataActionTypes.SetCommunityList: {
      return {
        ...state,
        communityList: action.payload.communityList ?? [],
        isCommunityDataLoading: false,
      };
    }

    case ReferenceDataActionTypes.SetPositionList: {
      return {
        ...state,
        positionList: action.payload.positionList ?? [],
        isPositionDataLoading: false,
      };
    }

    case ReferenceDataActionTypes.SetActivityList: {
      return {
        ...state,
        activityList: action.payload.activityList ?? [],
        isActivityDataLoading: false,
      };
    }

    case ReferenceDataActionTypes.SetCECRequestStatusList: {
      return {
        ...state,
        cecRequestStatusList: action.payload.cecRequestStatusList ?? [],
        isCecRequestStatusLoading: false,
      };
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};
