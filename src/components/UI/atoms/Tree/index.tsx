import React from 'react';
import ReactFlow, {
  Connection,
  Edge,
  EdgeChange,
  Node,
  NodeChange,
} from 'reactflow';

import useStyles from './Tree.styles';

type TreeProps = ComponentWithChildren & {
  edges: Edge[];
  nodes: Node[];
  onConnect: (params: Connection) => void;
  onDragOver: (event: React.DragEvent) => void;
  onDrop: (event: React.DragEvent) => void;
  onEdgesChange: (changes: EdgeChange[]) => void;
  onNodesChange: (changes: NodeChange[]) => void;
  wrapperRef: React.RefObject<HTMLDivElement>;
};

export const Tree = ({
  children,
  edges,
  nodes,
  onConnect,
  onDragOver,
  onDrop,
  onEdgesChange,
  onNodesChange,
  wrapperRef,
}: TreeProps) => {
  const {classes} = useStyles();

  return (
    <div className={classes.container} ref={wrapperRef}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onDrop={onDrop}
        onDragOver={onDragOver}
        deleteKeyCode={['Delete', 'Backspace']}
        fitView
      >
        {children}
      </ReactFlow>
    </div>
  );
};
