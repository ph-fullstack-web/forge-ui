import React from 'react';

import {Center, Loader} from 'components/UI/atoms';

export const PageLoader = () => {
  return (
    <Center h="100vh">
      <Loader size="xl" />
    </Center>
  );
};
