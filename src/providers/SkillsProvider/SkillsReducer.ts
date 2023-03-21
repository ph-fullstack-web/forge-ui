import {Skill} from 'models/skills';

export interface SkillContextState extends ServiceModel {
  skillList: Skill[];
}

export interface SkillContextPayload {
  skillList?: Skill[];
  newSkill?: Skill;
  updatedSkill?: Skill;
  deletedSkillId?: string;
}

export enum SkillContextActionTypes {
  Create,
  Delete,
  LoadComplete,
  Update,
}

export type SkillContextAction = {
  type: SkillContextActionTypes;
  payload: SkillContextPayload;
};

export const initialSkillState: SkillContextState = {
  skillList: [],
  isDataLoading: true,
};

export const skillReducer = (
  state: SkillContextState,
  action: SkillContextAction
): SkillContextState => {
  switch (action.type) {
    case SkillContextActionTypes.LoadComplete: {
      return {
        ...state,
        isDataLoading: false,
        skillList: action.payload.skillList ?? [],
      };
    }

    case SkillContextActionTypes.Create: {
      if (action.payload.newSkill)
        return {
          ...state,
          skillList: [...state.skillList, action.payload.newSkill],
        };

      return state;
    }

    case SkillContextActionTypes.Update: {
      if (action.payload.updatedSkill) {
        const newSkillList = state.skillList.map(skill =>
          skill._id === action.payload.updatedSkill?._id
            ? action.payload.updatedSkill
            : skill
        );

        return {
          ...state,
          isDataLoading: false,
          skillList: newSkillList,
        };
      }

      return state;
    }

    case SkillContextActionTypes.Delete: {
      if (action.payload.deletedSkillId) {
        const newSkillList =
          state.skillList.filter(
            skill => skill._id !== action.payload.deletedSkillId
          ) ?? [];

        return {
          ...state,
          isDataLoading: false,
          skillList: newSkillList,
        };
      }

      return state;
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};
