import {useContext} from 'react';

import {SkillTemplateContext} from './SkillTemplatesContext';

export const useSkillTemplateContext = () => {
  const context = useContext(SkillTemplateContext);

  if (context === undefined) {
    throw new Error(
      'useSkillTemplateContext() hook must be used within <SkillTemplateProvider />'
    );
  }

  return context;
};
