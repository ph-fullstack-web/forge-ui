import {useContext} from 'react';

import {ReferenceDataContext} from 'providers/ReferenceDataProvider/ReferenceDataContext';

export const useReferenceDataProvider = () => {
  const context = useContext(ReferenceDataContext);
  if (context === undefined) {
    throw new Error(
      'useReferenceDataProvider() hook must be used within <ReferenceDataContext/>'
    );
  }
  return context;
};
