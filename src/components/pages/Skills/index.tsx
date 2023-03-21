import React from 'react';

import {SkillsTemplate} from 'components/templates/Skills';
import template from 'mocks/template_one.json';
import {useSkillContext} from 'providers';

export const Skills = () => {
  const {skillList} = useSkillContext();

  return <SkillsTemplate skillList={skillList} template={template} />;
};
