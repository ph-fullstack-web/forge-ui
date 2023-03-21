import {useFetchCT} from 'hooks';
import {HTTPMethod} from 'lib/constants';
//import {PeopleDTO} from 'models/communityTrackerDTO';
import {ctApiRoutes} from 'services/communityTracker/ctApiRoutes';
import {ServiceBase} from 'services/ServiceBase';

export class CTEmployeeService extends ServiceBase {
  useGetEmployees = () => {
    return useFetchCT<ApprovedAny>({
      method: HTTPMethod.GET,
      headers: {
        Authorization: this.bearer,
      },
      url: ctApiRoutes.employee.getAll(),
    });
  };

  useGetEmployeeByEmail = (email: string) => {
    return useFetchCT<ApprovedAny>({
      method: HTTPMethod.GET,
      headers: {
        Authorization: this.bearer,
      },
      url: ctApiRoutes.employee.getByEmail(email),
    });
  };
}

export default CTEmployeeService;
