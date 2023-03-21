import {createContext} from 'react';

import {SkillTemplate} from 'models/skills';

export interface SkillTemplateContextProps {
  skillTemplateList: SkillTemplate[];
  actions: {
    addSkillTemplate: (
      template: SkillTemplate,
      onSuccess: () => void,
      onFailure: () => void
    ) => void;
    getSkillTemplates: (templateId: string) => SkillTemplate | undefined;
    updateSkillTemplate: (
      template: SkillTemplate,
      onSuccess: () => void,
      onFailure: () => void
    ) => void;
    deleteSkillTemplate: (
      templateId: string,
      onSuccess: () => void,
      onFailure: () => void
    ) => void;
  };
}

export const SkillTemplateContext = createContext<
  SkillTemplateContextProps | undefined
>(undefined);
