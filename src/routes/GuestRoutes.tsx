import React from 'react';
import {Route, Navigate, Routes} from 'react-router-dom';

import {Login} from 'components/pages';
import {PagePaths} from './PagePaths';

export const GuestRoutes = () => {
  return (
    <Routes>
      <Route path={PagePaths.Login} element={<Login />} />
      <Route path="*" element={<Navigate to={PagePaths.Login} />} />
    </Routes>
  );
};
