import React, {useEffect} from 'react';
import {useLocation} from 'react-router-dom';

import {useAuthContext} from 'hooks';

export const AuthVerify = () => {
  const location = useLocation();
  const {sessionTimeout, logout} = useAuthContext();

  useEffect(() => {
    const tokenExpired = sessionTimeout * 1000 < Date.now();
    if (tokenExpired) {
      logout();
    }
  }, [location]);

  return <></>;
};
