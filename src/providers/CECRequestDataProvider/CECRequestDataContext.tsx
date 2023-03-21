import {createContext} from 'react';

import {CECRequest} from 'models/core';

export interface CECRequestDataContextProps {
  selectedCECRequest: CECRequest | undefined;
}

export const CECRequestDataContext = createContext<
  CECRequestDataContextProps | undefined
>(undefined);
