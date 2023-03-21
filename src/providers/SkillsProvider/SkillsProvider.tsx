import React, {useEffect, useReducer} from 'react';

import {PageLoader} from 'components/UI/molecules';
import {useNotification} from 'hooks';
import {NotificationType} from 'lib/constants';
import {Skill} from 'models/skills';
import {SkillsService} from 'services';
import {SkillContext} from './SkillsContext';
import {
  initialSkillState,
  SkillContextActionTypes,
  skillReducer,
} from './SkillsReducer';

type SkillProviderProps = ComponentWithChildren;

export const SkillProvider = ({children}: SkillProviderProps) => {
  const notify = useNotification();
  const [store, dispatch] = useReducer(skillReducer, initialSkillState);
  const {skillList} = store;
  const {useCreateSkill, useDeleteSkill, useGetSkills, useUpdateSkill} =
    new SkillsService();
  const getSkills = useGetSkills();

  const handleAddSkill = (
    newSkill: Skill,
    onSuccess: () => void,
    onFailure: () => void
  ) => {
    const createSkill = useCreateSkill();
    createSkill.dispatch({
      request: {data: newSkill},
      onSuccess: ({data: skillId}) => {
        newSkill._id = skillId;
        dispatch({
          type: SkillContextActionTypes.Create,
          payload: {newSkill},
        });
        notify(NotificationType.Success, 'Skill created successfully');
        onSuccess();
      },
      onFailure: error => {
        notify(NotificationType.Error, error.message);
        onFailure();
      },
    });
  };

  const handleDeleteSkill = (
    skillId: string,
    onSuccess: () => void,
    onFailure: () => void
  ) => {
    const deleteSkill = useDeleteSkill(skillId);
    deleteSkill.dispatch({
      request: {data: {id: skillId}},
      onSuccess: ({data: deletedSkill}) => {
        dispatch({
          type: SkillContextActionTypes.Delete,
          payload: {deletedSkillId: deletedSkill._id},
        });
        notify(NotificationType.Success, 'Skill deleted successfully');
        onSuccess();
      },
      onFailure: error => {
        notify(NotificationType.Error, error.message);
        onFailure();
      },
    });
  };

  const handleGetSkills = (skillId: string) => {
    return store.skillList.find(skill => skill._id === skillId);
  };

  const handleUpdateSkill = (
    updatedSkill: Skill,
    onSuccess: () => void,
    onFailure: () => void
  ) => {
    const updateSkill = useUpdateSkill(updatedSkill._id);
    updateSkill.dispatch({
      request: {data: updatedSkill},
      onSuccess: () => {
        dispatch({
          type: SkillContextActionTypes.Update,
          payload: {updatedSkill},
        });
        notify(NotificationType.Success, 'Skill updated successfully');
        onSuccess();
      },
      onFailure: error => {
        notify(NotificationType.Error, error.message);
        onFailure();
      },
    });
  };

  useEffect(() => {
    getSkills.dispatch({
      onSuccess: (data: ApprovedAny) => {
        dispatch({
          type: SkillContextActionTypes.LoadComplete,
          payload: {
            skillList: data.data || [],
          },
        });
      },
    });
  }, []);

  if (store.isDataLoading) {
    return <PageLoader />;
  }

  return (
    <SkillContext.Provider
      value={{
        skillList,
        actions: {
          addSkill: handleAddSkill,
          deleteSkill: handleDeleteSkill,
          getSkills: handleGetSkills,
          updateSkill: handleUpdateSkill,
        },
      }}
    >
      {children}
    </SkillContext.Provider>
  );
};
