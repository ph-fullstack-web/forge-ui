import {useFetch} from 'hooks';
import {HTTPMethod} from 'lib/constants';
import {ActivityCategory} from 'models/core';
import {apiRoutes} from 'services/apiRoutes';
import {ServiceBase} from 'services/ServiceBase';

export class ActivityCategoryService extends ServiceBase {
  useGetActivityCategories = () => {
    return useFetch<ActivityCategory>({
      method: HTTPMethod.POST,
      headers: {
        Authorization: this.bearer,
      },
      url: apiRoutes.graphql(),
      data: {
        query: `
        {
          activityCategories {
            activityCategoryId,
            name
          }
        }
        `,
      },
    });
  };
}

export default ActivityCategoryService;
