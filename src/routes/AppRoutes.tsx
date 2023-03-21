import React from 'react';
import {useAuthContext} from 'hooks';

import {GuestRoutes} from './GuestRoutes';
import {MemberRoutes} from './MemberRoutes';

export const AppRoutes = () => {
  const {isLoggedIn} = useAuthContext();

  return (
    <>
      {isLoggedIn && <MemberRoutes />}
      {!isLoggedIn && <GuestRoutes />}
    </>
  );
};
