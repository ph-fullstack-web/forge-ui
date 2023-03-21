import React from 'react';
import {ReactFlowProvider as DefaultReactFlowProvider} from 'reactflow';

type ReactFlowProviderProps = ComponentWithChildren;

export const ReactFlowProvider = ({children}: ReactFlowProviderProps) => {
  return <DefaultReactFlowProvider>{children}</DefaultReactFlowProvider>;
};
