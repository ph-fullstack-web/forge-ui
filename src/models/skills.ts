import {Node} from 'reactflow';

export type DefaultNodeData = {
  _id: string;
  label: string;
};

export type Skill = DefaultNodeData;

export type SkillNode = Node<Skill>;

export type SkillTemplateNode = {
  id: string;
  data: Omit<Skill, '_id'>;
  position: {
    x: number;
    y: number;
  };
};

export type SkillTemplateEdge = {
  id: string;
  source: string;
  target: string;
};

export type SkillTemplate = {
  _id: string;
  name: string;
  nodes: SkillTemplateNode[];
  edges: SkillTemplateEdge[];
};

export type GetTemplateParams = {
  withNodes?: boolean;
};
