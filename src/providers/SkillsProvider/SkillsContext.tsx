import {createContext} from 'react';

import {Skill} from 'models/skills';

export interface SkillContextProps {
  skillList: Skill[];
  actions: {
    addSkill: (
      skill: Skill,
      onSuccess: () => void,
      onFailure: () => void
    ) => void;
    getSkills: (skillId: string) => Skill | undefined;
    updateSkill: (
      skill: Skill,
      onSuccess: () => void,
      onFailure: () => void
    ) => void;
    deleteSkill: (
      skillId: string,
      onSuccess: () => void,
      onFailure: () => void
    ) => void;
  };
}

export const SkillContext = createContext<SkillContextProps | undefined>(
  undefined
);
