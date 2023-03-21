import {CECRequest} from 'models/core';

export interface CECRequestListContextState extends ServiceModel {
  cecRequestList: CECRequest[];
  selectedCECRequest: CECRequest | undefined;
}

export interface CECRequestListContextPayload {
  selectedCECRequest?: CECRequest;
  cecRequestList?: CECRequest[];
  newCECRequest?: CECRequest;
  updatedCECRequest?: CECRequest;
  deletedCECRequestId?: string;
}

export enum CECRequestListContextActionTypes {
  LoadComplete,
  Create,
  Update,
  Delete,
  SetSelectedCECRequest,
}

export type CECRequestListContextAction = {
  type: CECRequestListContextActionTypes;
  payload: CECRequestListContextPayload;
};

export const initialCECState: CECRequestListContextState = {
  cecRequestList: [],
  isDataLoading: true,
  selectedCECRequest: undefined,
};

export const cecRequestReducer = (
  state: CECRequestListContextState,
  action: CECRequestListContextAction
): CECRequestListContextState => {
  switch (action.type) {
    case CECRequestListContextActionTypes.LoadComplete: {
      return {
        ...state,
        isDataLoading: false,
        cecRequestList: action.payload.cecRequestList ?? [],
      };
    }

    case CECRequestListContextActionTypes.Create: {
      const newCECRequestList = [...state.cecRequestList];
      if (action.payload.newCECRequest)
        newCECRequestList.push(action.payload.newCECRequest);
      return {
        ...state,
        cecRequestList: newCECRequestList,
      };
    }

    case CECRequestListContextActionTypes.Update: {
      if (action.payload && action.payload.updatedCECRequest) {
        const newCECRequestList =
          state.cecRequestList.filter(
            cecRequest =>
              cecRequest.cecRequestId !==
              action.payload.updatedCECRequest!.cecRequestId
          ) ?? [];

        newCECRequestList.push(action.payload.updatedCECRequest);

        return {
          ...state,
          isDataLoading: false,
          cecRequestList: newCECRequestList,
        };
      }

      return {...state};
    }

    case CECRequestListContextActionTypes.Delete: {
      if (action.payload && action.payload.deletedCECRequestId) {
        const newCECRequestList =
          state.cecRequestList.filter(
            cecRequest =>
              cecRequest.cecRequestId !== action.payload.deletedCECRequestId
          ) ?? [];

        return {
          ...state,
          isDataLoading: false,
          cecRequestList: newCECRequestList,
        };
      }

      return {...state};
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};
