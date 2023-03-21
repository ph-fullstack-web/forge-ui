import {useFetch} from 'hooks';
import {HTTPMethod} from 'lib/constants';
import {GetTemplateParams, SkillTemplate} from 'models/skills';
import {apiRoutes} from 'services/apiRoutes';
import {ServiceBase} from 'services/ServiceBase';

export class SkillTemplatesService extends ServiceBase {
  useGetSkillTemplates = (params?: GetTemplateParams, id?: string) => {
    return useFetch<SkillTemplate[] | SkillTemplate>({
      method: HTTPMethod.GET,
      baseURL: 'http://localhost:5000',
      params,
      url: apiRoutes.skills.getSkillTemplates(id),
      headers: {
        Authorization: this.bearer,
      },
    });
  };

  useCreateSkillTemplate = () => {
    return useFetch<SkillTemplate>({
      method: HTTPMethod.POST,
      url: apiRoutes.skills.createSkillTemplate(),
      headers: {
        Authorization: this.bearer,
      },
    });
  };

  useDeleteSkillTemplate = (id: string) => {
    return useFetch<SkillTemplate>({
      method: HTTPMethod.DELETE,
      url: apiRoutes.skills.deleteSkillTemplate(id),
      headers: {
        Authorization: this.bearer,
      },
    });
  };

  useUpdateSkillTemplate = (id: string) => {
    return useFetch<SkillTemplate>({
      method: HTTPMethod.POST,
      url: apiRoutes.skills.updateSkillTemplate(id),
      headers: {
        Authorization: this.bearer,
      },
    });
  };
}
