import {useContext} from 'react';

import {CECRequestListDataContext} from 'providers/CECRequestListDataProvider/CECRequestListDataContext';

export const useCECRequestListDataProvider = () => {
  const context = useContext(CECRequestListDataContext);
  if (context === undefined) {
    throw new Error(
      'useCECRequestListDataProvider() hook must be used within <CECRequestListDataContext/>'
    );
  }
  return context;
};
