import {useFetch} from 'hooks';
import {HTTPMethod} from 'lib/constants';
import {Position} from 'models/core';
import {apiRoutes} from 'services/apiRoutes';
import {ServiceBase} from 'services/ServiceBase';

export class LookupService extends ServiceBase {
  useGetPositions = () => {
    return useFetch<Position>({
      method: HTTPMethod.POST,
      headers: {
        Authorization: this.bearer,
      },
      url: apiRoutes.graphql(),
      data: {
        query: `
        {
          positions {
            id,
            name,
          }
        }
        `,
      },
    });
  };
}

export default LookupService;
