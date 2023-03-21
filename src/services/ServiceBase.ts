import {useCookies} from 'react-cookie';

export class ServiceBase {
  readonly bearer: string;
  readonly ACCESS_TOKEN = 'svmp_access_token';

  constructor() {
    const [cookies] = useCookies([this.ACCESS_TOKEN]);
    this.bearer = `Bearer ${cookies[this.ACCESS_TOKEN]}`;
  }
}
