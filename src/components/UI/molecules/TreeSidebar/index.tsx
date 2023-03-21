import React from 'react';

import {DefaultNodeData} from 'models/skills';
import useStyles from './TreeSidebar.styles';

type TreeSidebarProps<T extends DefaultNodeData> = {
  nodes: T[];
};

export const TreeSidebar = <T extends DefaultNodeData>({
  nodes,
}: TreeSidebarProps<T>) => {
  const {classes} = useStyles();

  const onDragStart = (event: React.DragEvent, data: T) => {
    event.dataTransfer.setData('tree-selected-node', JSON.stringify(data));
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div className={classes.container}>
      {nodes.map(node => (
        <div
          key={node._id}
          className={classes.node}
          onDragStart={e => onDragStart(e, node)}
          draggable
        >
          {node.label}
        </div>
      ))}
    </div>
  );
};
