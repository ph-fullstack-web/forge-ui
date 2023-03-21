import {useFetch} from 'hooks';
import {HTTPMethod} from 'lib/constants';
import {Activity} from 'models/core';
import {apiRoutes} from 'services/apiRoutes';
import {ServiceBase} from 'services/ServiceBase';

export class ActivityService extends ServiceBase {
  useGetActivities = () => {
    return useFetch<Activity>({
      method: HTTPMethod.POST,
      headers: {
        Authorization: this.bearer,
      },
      url: apiRoutes.graphql(),
      data: {
        query: `
        {
          activities {
            activityId,
            name,
            points,
            activityCategory
          }
        }
        `,
      },
    });
  };
}

export default ActivityService;
