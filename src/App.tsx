import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import {AuthVerify} from 'components/UI/atoms';
import {AppProvider} from 'providers/AppProvider';
import {AppRoutes} from 'routes';

export const App = () => {
  return (
    <Router>
      <AppProvider>
        <AuthVerify />
        <AppRoutes />
      </AppProvider>
    </Router>
  );
};

export default App;
