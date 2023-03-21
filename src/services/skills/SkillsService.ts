import {useFetch} from 'hooks';
import {HTTPMethod} from 'lib/constants';
import {Skill} from 'models/skills';
import {apiRoutes} from 'services/apiRoutes';
import {ServiceBase} from 'services/ServiceBase';

export class SkillsService extends ServiceBase {
  useGetSkills = (id?: string) => {
    return useFetch<Skill[] | Skill>({
      method: HTTPMethod.GET,
      baseURL: 'http://localhost:5000',
      url: apiRoutes.skills.getSkills(id),
      headers: {
        Authorization: this.bearer,
      },
    });
  };

  useCreateSkill = () => {
    return useFetch<string>({
      method: HTTPMethod.POST,
      url: apiRoutes.skills.createSkill(),
      headers: {
        Authorization: this.bearer,
      },
    });
  };

  useDeleteSkill = (id: string) => {
    return useFetch<Skill>({
      method: HTTPMethod.DELETE,
      url: apiRoutes.skills.deleteSkill(id),
      headers: {
        Authorization: this.bearer,
      },
    });
  };

  useUpdateSkill = (id: string) => {
    return useFetch<Skill>({
      method: HTTPMethod.POST,
      url: apiRoutes.skills.updateSkill(id),
      headers: {
        Authorization: this.bearer,
      },
    });
  };
}
