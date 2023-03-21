import React, {useEffect, useReducer} from 'react';

import {PageLoader} from 'components/UI/molecules';
import {useNotification} from 'hooks';
import {NotificationType} from 'lib/constants';
import {SkillTemplate} from 'models/skills';
import {SkillTemplatesService} from 'services';
import {SkillTemplateContext} from './SkillTemplatesContext';
import {
  initialSkillTemplateState,
  SkillTemplateContextActionTypes,
  skillTemplateReducer,
} from './SkillTemplatesReducer';

type SkillTemplateProviderProps = ComponentWithChildren;

export const SkillTemplateProvider = ({
  children,
}: SkillTemplateProviderProps) => {
  const notify = useNotification();
  const [store, dispatch] = useReducer(
    skillTemplateReducer,
    initialSkillTemplateState
  );
  const {skillTemplateList} = store;
  const {
    useCreateSkillTemplate,
    useDeleteSkillTemplate,
    useGetSkillTemplates,
    useUpdateSkillTemplate,
  } = new SkillTemplatesService();
  const getSkillTemplates = useGetSkillTemplates({withNodes: true});

  const handleAddSkillTemplate = (
    newSkillTemplate: SkillTemplate,
    onSuccess: () => void,
    onFailure: () => void
  ) => {
    const createSkillTemplate = useCreateSkillTemplate();
    createSkillTemplate.dispatch({
      request: {data: newSkillTemplate},
      onSuccess: ({data: skillTemplate}) => {
        newSkillTemplate._id = skillTemplate._id;
        dispatch({
          type: SkillTemplateContextActionTypes.Create,
          payload: {newSkillTemplate},
        });
        notify(NotificationType.Success, 'Skill Template created successfully');
        onSuccess();
      },
      onFailure: error => {
        notify(NotificationType.Error, error.message);
        onFailure();
      },
    });
  };

  const handleDeleteSkillTemplate = (
    skillTemplateId: string,
    onSuccess: () => void,
    onFailure: () => void
  ) => {
    const deleteSkillTemplate = useDeleteSkillTemplate(skillTemplateId);
    deleteSkillTemplate.dispatch({
      request: {data: {_id: skillTemplateId}},
      onSuccess: ({data: deletedSkillTemplate}) => {
        dispatch({
          type: SkillTemplateContextActionTypes.Delete,
          payload: {deletedSkillTemplateId: deletedSkillTemplate._id},
        });
        notify(NotificationType.Success, 'Skill Template deleted successfully');
        onSuccess();
      },
      onFailure: error => {
        notify(NotificationType.Error, error.message);
        onFailure();
      },
    });
  };

  const handleGetSkillTemplates = (skillTemplateId: string) => {
    return store.skillTemplateList.find(
      template => template._id === skillTemplateId
    );
  };

  const handleUpdateSkillTemplate = (
    updatedSkillTemplate: SkillTemplate,
    onSuccess: () => void,
    onFailure: () => void
  ) => {
    const updateSkillTemplate = useUpdateSkillTemplate(
      updatedSkillTemplate._id
    );
    updateSkillTemplate.dispatch({
      request: {data: updatedSkillTemplate},
      onSuccess: () => {
        dispatch({
          type: SkillTemplateContextActionTypes.Update,
          payload: {updatedSkillTemplate},
        });
        notify(NotificationType.Success, 'Skill Template updated successfully');
        onSuccess();
      },
      onFailure: error => {
        notify(NotificationType.Error, error.message);
        onFailure();
      },
    });
  };

  useEffect(() => {
    getSkillTemplates.dispatch({
      onSuccess: (data: ApprovedAny) => {
        dispatch({
          type: SkillTemplateContextActionTypes.LoadComplete,
          payload: {
            skillTemplateList: data.data || [],
          },
        });
      },
    });
  }, []);

  if (store.isDataLoading) {
    return <PageLoader />;
  }

  return (
    <SkillTemplateContext.Provider
      value={{
        skillTemplateList,
        actions: {
          addSkillTemplate: handleAddSkillTemplate,
          deleteSkillTemplate: handleDeleteSkillTemplate,
          getSkillTemplates: handleGetSkillTemplates,
          updateSkillTemplate: handleUpdateSkillTemplate,
        },
      }}
    >
      {children}
    </SkillTemplateContext.Provider>
  );
};
