import {useContext} from 'react';

import {CECRequestDataContext} from 'providers/CECRequestDataProvider/CECRequestDataContext';

export const useCECRequestDataProvider = () => {
  const context = useContext(CECRequestDataContext);
  if (context === undefined) {
    throw new Error(
      'useCECRequestDataProvider() hook must be used within <CECRequestDataContext/>'
    );
  }
  return context;
};
