import {useState} from 'react';
import axios from 'axios';
import useIsMounted from '../useIsMounted';
import {
  FetchConfig,
  FetchError,
  FetchResponse,
  UseFetchDispatch,
} from './types';

export function useFetchCT<ResponseData = ApprovedAny>(
  fetchConfig: FetchConfig
) {
  // Api Promise Handling Lifecycle State
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | FetchError<ResponseData>>(null);
  const [data, setData] = useState<null | ResponseData>(null);

  // Check component is mounted
  const {validateIsMounted} = useIsMounted();

  // Set Up Axios Request
  const API_BASE_URL =
    fetchConfig.baseURL || process.env.REACT_APP_COMMUNITY_TRACKER_API_BASE_URL;
  const CancelToken = axios.CancelToken;
  const source = CancelToken.source();

  // Dispatch Axios Request Function
  const dispatch = ({
    request,
    onSuccess,
    onFailure,
    onFinally,
  }: UseFetchDispatch<ResponseData> = {}) => {
    const axiosConfig = Object.assign(
      {},
      {baseURL: API_BASE_URL, cancelToken: source.token},
      fetchConfig,
      request
    ) as FetchConfig;

    // Initialize State
    validateIsMounted(() => {
      setLoading(true);
      setError(null);
    });

    return axios(axiosConfig)
      .then((res: FetchResponse<ResponseData>) => {
        validateIsMounted(() => {
          // Update State
          setData(res.data);
          // Extend 'onSuccess' Callbacks
          onSuccess && onSuccess(res);
        });
        return res.data;
      })
      .catch((error: FetchError<ResponseData>) => {
        validateIsMounted(() => {
          // Update State
          setError(error);
          // Extend 'onFailure' Callbacks
          onFailure && onFailure(error);
        });
      })
      .finally(() => {
        validateIsMounted(() => {
          // Update State
          setLoading(false);
          // Extend 'onFailure' Callbacks
          onFinally && onFinally();
        });
      });
  };

  const cancel = () => source.cancel('Api Request Cancelled');

  return {
    dispatch,
    cancel,
    state: {loading, error, data},
  };
}

export default useFetchCT;
