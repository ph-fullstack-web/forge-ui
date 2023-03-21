import React from 'react';

import {SkillTree} from 'components/UI/organisms';
import {Skill, SkillTemplate} from 'models/skills';

type SkillTemplateProps = {
  skillList: Skill[];
  template?: SkillTemplate;
};

export const SkillsTemplate = ({skillList, template}: SkillTemplateProps) => {
  return <SkillTree skillList={skillList} template={template} />;
};
