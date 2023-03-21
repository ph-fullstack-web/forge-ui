import {SkillTemplate} from 'models/skills';

export interface SkillTemplateContextState extends ServiceModel {
  skillTemplateList: SkillTemplate[];
}

export interface SkillTemplateContextPayload {
  skillTemplateList?: SkillTemplate[];
  newSkillTemplate?: SkillTemplate;
  updatedSkillTemplate?: SkillTemplate;
  deletedSkillTemplateId?: string;
}

export enum SkillTemplateContextActionTypes {
  Create,
  Delete,
  LoadComplete,
  Update,
}

export type SkillTemplateContextAction = {
  type: SkillTemplateContextActionTypes;
  payload: SkillTemplateContextPayload;
};

export const initialSkillTemplateState: SkillTemplateContextState = {
  skillTemplateList: [],
  isDataLoading: true,
};

export const skillTemplateReducer = (
  state: SkillTemplateContextState,
  action: SkillTemplateContextAction
): SkillTemplateContextState => {
  switch (action.type) {
    case SkillTemplateContextActionTypes.LoadComplete: {
      return {
        ...state,
        isDataLoading: false,
        skillTemplateList: action.payload.skillTemplateList ?? [],
      };
    }

    case SkillTemplateContextActionTypes.Create: {
      if (action.payload.newSkillTemplate)
        return {
          ...state,
          skillTemplateList: [
            ...state.skillTemplateList,
            action.payload.newSkillTemplate,
          ],
        };

      return state;
    }

    case SkillTemplateContextActionTypes.Update: {
      if (action.payload.updatedSkillTemplate) {
        const newSkillTemplateList = state.skillTemplateList.map(template =>
          template._id === action.payload.updatedSkillTemplate?._id
            ? action.payload.updatedSkillTemplate
            : template
        );

        return {
          ...state,
          isDataLoading: false,
          skillTemplateList: newSkillTemplateList,
        };
      }

      return state;
    }

    case SkillTemplateContextActionTypes.Delete: {
      if (action.payload.deletedSkillTemplateId) {
        const newSkillTemplateList =
          state.skillTemplateList.filter(
            template => template._id !== action.payload.deletedSkillTemplateId
          ) ?? [];

        return {
          ...state,
          isDataLoading: false,
          skillTemplateList: newSkillTemplateList,
        };
      }

      return state;
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};
