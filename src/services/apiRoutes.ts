interface ApiRoutes {
  graphql: () => string;
  cecRequest: {
    createCECRequest: () => string;
    updateCECRequest: (id: string) => string;
    deleteCECRequest: (id: string) => string;
    uploadCECRequestAttachments: () => string;
    removeCECRequestAttachment: () => string;
  };
  skills: {
    getSkills: (id?: string) => string;
    getSkillTemplates: (id?: string) => string;
    createSkill: () => string;
    createSkillTemplate: () => string;
    updateSkill: (id: string) => string;
    updateSkillTemplate: (id: string) => string;
    deleteSkill: (id: string) => string;
    deleteSkillTemplate: (id: string) => string;
  };
  user: {
    getUserByEmail: (email: string) => string;
  };
}

export const apiRoutes: ApiRoutes = {
  graphql: () => '/graphql',
  cecRequest: {
    createCECRequest: () => '/cecRequests',
    updateCECRequest: (id: string) => `/cecRequests/${id}`,
    deleteCECRequest: (id: string) => `/cecRequests/${id}`,
    uploadCECRequestAttachments: () => '/cecRequests/attachments',
    removeCECRequestAttachment: () => 'cecRequests/attachments/delete',
  },
  skills: {
    getSkills: (id?: string) => (id ? `/skills/${id}` : '/skills'),
    getSkillTemplates: (id?: string) =>
      id ? `/skill-templates/${id}` : '/skill-templates',
    createSkill: () => '/skills',
    createSkillTemplate: () => '/skill-templates',
    updateSkill: (id: string) => `/skills/${id}`,
    updateSkillTemplate: (id: string) => `/skill-templates/${id}`,
    deleteSkill: (id: string) => `/skills/${id}`,
    deleteSkillTemplate: (id: string) => `/skill-templates/${id}`,
  },
  user: {
    getUserByEmail: (email: string) => `/users/getUserByEmail/${email}`,
  },
};
