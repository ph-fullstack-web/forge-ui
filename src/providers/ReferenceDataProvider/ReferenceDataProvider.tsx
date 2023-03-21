import React, {useEffect, useReducer} from 'react';

import {useAuthContext} from 'hooks';
import {getPositionList, getCECRequestStatusList} from 'lib/helpers';
import {Community} from 'models/core';
import {ActivityService} from 'services';

import {
  ReferenceDataActionTypes,
  initialReferenceDataState,
  referenceDataReducer,
} from './ReferenceDataReducer';
import {ReferenceDataContext} from './ReferenceDataContext';

type ReferenceDataProviderProps = ComponentWithChildren;

export const ReferenceDataProvider = ({
  children,
}: ReferenceDataProviderProps) => {
  const [store, dispatch] = useReducer(
    referenceDataReducer,
    initialReferenceDataState
  );

  const {useGetActivities} = new ActivityService();
  const getActivitiesService = useGetActivities();

  const {isLoggedIn} = useAuthContext();

  const getPositions = () => {
    dispatch({
      type: ReferenceDataActionTypes.SetPositionList,
      payload: {positionList: getPositionList()},
    });
  };

  const getCommunities = () => {
    const communityList: Community[] = [
      {id: '1', name: 'Full Stack Web', approvers: []},
      {id: '2', name: '.Net', approvers: []},
      {id: '3', name: 'Cloud', approvers: []},
    ];
    dispatch({
      type: ReferenceDataActionTypes.SetCommunityList,
      payload: {communityList: communityList},
    });
  };

  const getActivities = () => {
    if (!isLoggedIn) {
      dispatch({
        type: ReferenceDataActionTypes.SetActivityList,
        payload: {activityList: []},
      });

      return;
    }

    getActivitiesService.dispatch({
      onSuccess: ({data}: ApprovedAny) => {
        dispatch({
          type: ReferenceDataActionTypes.SetActivityList,
          payload: {activityList: data.data.activities},
        });
      },
    });
  };

  const getCECRequestStatuses = () => {
    dispatch({
      type: ReferenceDataActionTypes.SetCECRequestStatusList,
      payload: {cecRequestStatusList: getCECRequestStatusList()},
    });
  };

  useEffect(() => {
    getPositions();
    getCommunities();
    getActivities();
    getCECRequestStatuses();
  }, [isLoggedIn]);

  if (
    store.isActivityDataLoading &&
    store.isCecRequestStatusLoading &&
    store.isCommunityDataLoading &&
    store.isPositionDataLoading
  ) {
    return <>Reference Data Loading...</>;
  }

  return (
    <ReferenceDataContext.Provider
      value={{
        communityList: store.communityList ?? [],
        positionList: store.positionList ?? [],
        activityList: store.activityList ?? [],
        cecRequestStatusList: store.cecRequestStatusList ?? [],
      }}
    >
      {children}
    </ReferenceDataContext.Provider>
  );
};
