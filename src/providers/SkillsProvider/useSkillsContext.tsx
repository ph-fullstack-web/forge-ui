import {useContext} from 'react';

import {SkillContext} from './SkillsContext';

export const useSkillContext = () => {
  const context = useContext(SkillContext);

  if (context === undefined) {
    throw new Error(
      'useSkillContext() hook must be used within <SkillProvider />'
    );
  }

  return context;
};
