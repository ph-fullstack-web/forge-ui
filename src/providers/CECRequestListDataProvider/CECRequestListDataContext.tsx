import {createContext} from 'react';

import {CECRequest, CECRequestAttachment} from 'models/core';

export interface CECRequestListDataContextProps {
  currentCECPoints: number;
  pendingCECPoints: number;
  approvedCECRequestList: CECRequest[];
  pendingCECRequestList: CECRequest[];
  rejectedCECRequestList: CECRequest[];
  draftCECRequestList: CECRequest[];
  actions: {
    addCECRequest: (
      newCECRequest: CECRequest,
      attachments: File[],
      onSuccess: () => void,
      onFailure: () => void
    ) => void;
    getCECRequest: (cecRequestId: string) => CECRequest | undefined;
    updateCECRequest: (
      updatedCECRequest: CECRequest,
      newAttachments: File[],
      onSuccess: () => void,
      onFailure: () => void
    ) => void;
    deleteCECRequest: (onSuccess: () => void, onFailure: () => void) => void;
    deleteCECRequestAttachment: (
      updatedCECRequest: CECRequest,
      attachment: CECRequestAttachment,
      onSuccess: () => void,
      onFailure: () => void
    ) => void;
    setSelectedCECRequestId: (cecRequestId: string) => void;
  };
}

export const CECRequestListDataContext = createContext<
  CECRequestListDataContextProps | undefined
>(undefined);
