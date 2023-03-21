import {useFetch} from 'hooks';
import {HTTPMethod} from 'lib/constants';
import {apiRoutes} from 'services/apiRoutes';
import {ServiceBase} from 'services/ServiceBase';

export class UserService extends ServiceBase {
  useGetUser = (userId: string) => {
    return useFetch<ApprovedAny>({
      url: apiRoutes.graphql(),
      method: HTTPMethod.POST,
      headers: {
        Authorization: this.bearer,
      },
      data: {
        query: `
          query user($userId: String!) {
            user(userId: $userId) {
              userId,
              name,
              managerUserId,
              managerName,
              communityName,
            }
          }
        `,
        variables: {
          userId,
        },
      },
    });
  };

  useGetEmployeeByEmail = (email: string) => {
    return useFetch<ApprovedAny>({
      method: HTTPMethod.GET,
      headers: {
        Authorization: this.bearer,
      },
      url: apiRoutes.user.getUserByEmail(email),
    });
  };
}

export default UserService;
