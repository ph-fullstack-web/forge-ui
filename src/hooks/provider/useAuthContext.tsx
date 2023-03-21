import {useContext} from 'react';

import {AuthContext} from 'context';

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuthContext() hook must be used within <AuthContext/>');
  }
  return context;
};
