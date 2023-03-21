import React from 'react';
import {Panel, PanelPosition} from 'reactflow';

import useStyles from './TreeActions.styles';

type TreeActionsProps = ComponentWithChildren & {
  position: PanelPosition;
};

export const TreeActions = ({children, position}: TreeActionsProps) => {
  const {classes} = useStyles();

  return (
    <Panel className={classes.actions} position={position}>
      {children}
    </Panel>
  );
};
