import React from 'react';
import {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  Connection,
  Edge,
  EdgeChange,
  NodeChange,
  useReactFlow,
} from 'reactflow';

import {Tree, TreeActions} from 'components/UI/atoms';
import {TreeSidebar} from 'components/UI/molecules';
import {
  Skill,
  SkillNode,
  SkillTemplate,
  SkillTemplateNode,
} from 'models/skills';
import useStyles from './SkillTree.styles';

type SkillTreeProps = {
  skillList: Skill[];
  template?: SkillTemplate;
};

const emptyTemplate: SkillTemplate = {
  _id: '',
  name: '',
  nodes: [],
  edges: [],
};

export const SkillTree = ({
  skillList,
  template = emptyTemplate,
}: SkillTreeProps) => {
  const {classes} = useStyles();
  const [edges, setEdges] = React.useState<Edge[]>(template.edges);
  const [nodes, setNodes] = React.useState<SkillTemplateNode[]>(template.nodes);
  const reactFlowWrapper = React.useRef<HTMLDivElement>(null);
  const reactFlowInstance = useReactFlow();

  const onConnect = React.useCallback(
    (params: Connection) => setEdges(eds => addEdge(params, eds)),
    [setEdges]
  );

  const onDragOver = React.useCallback((event: React.DragEvent) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = React.useCallback(
    (event: React.DragEvent) => {
      event.preventDefault();

      const reactFlowBounds = reactFlowWrapper.current!.getBoundingClientRect();
      const skillStr = event.dataTransfer.getData('tree-selected-node');

      if (!skillStr) return;

      const skill: Skill = JSON.parse(skillStr);

      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });
      const newNode: SkillNode = {
        id: skill._id,
        type: 'default',
        position,
        data: skill,
      };

      setNodes(nds => nds.concat(newNode));
    },
    [reactFlowInstance]
  );

  const onEdgesChange = React.useCallback(
    (changes: EdgeChange[]) => setEdges(eds => applyEdgeChanges(changes, eds)),
    [setEdges]
  );

  const onNodesChange = React.useCallback(
    (changes: NodeChange[]) => setNodes(nds => applyNodeChanges(changes, nds)),
    [setNodes]
  );

  const onRestore = () => {
    const dataStr = localStorage.getItem('skill-tree-data');

    if (!dataStr) return;

    const data: SkillTreeProps['template'] = JSON.parse(dataStr);

    setNodes(data!.nodes);
    setEdges(data!.edges);
  };

  const onSave = () => {
    const data = {nodes, edges};

    localStorage.setItem('skill-tree-data', JSON.stringify(data));
  };

  React.useEffect(() => {
    onSave();
  }, []);

  return (
    <div className={classes.container}>
      <TreeSidebar<Skill> nodes={skillList} />
      <Tree
        edges={edges}
        nodes={nodes}
        onConnect={onConnect}
        onDragOver={onDragOver}
        onDrop={onDrop}
        onEdgesChange={onEdgesChange}
        onNodesChange={onNodesChange}
        wrapperRef={reactFlowWrapper}
      >
        <TreeActions position="top-right">
          <button onClick={onSave}>Save</button>
          <button onClick={onRestore}>Restore</button>
        </TreeActions>
      </Tree>
    </div>
  );
};
