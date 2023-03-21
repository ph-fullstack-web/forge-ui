import {
  AxiosPromise,
  AxiosResponse,
  AxiosError,
  AxiosRequestConfig,
} from 'axios';

import useFetch from '.';

export type FetchPromise<ResponseData = ApprovedAny> =
  AxiosPromise<ResponseData>;

export type FetchResponse<ResponseData = ApprovedAny> =
  AxiosResponse<ResponseData>;

export type FetchError<ResponseData = ApprovedAny> = AxiosError<ResponseData>;

export type FetchConfig = AxiosRequestConfig;

export interface UseFetchDispatchCallbacks<ResponseData = ApprovedAny> {
  onSuccess?: (response: FetchResponse<ResponseData>) => void;
  onFailure?: (error: FetchError<ResponseData>) => void;
  onFinally?: () => void;
}

export type UseFetchParams = Parameters<typeof useFetch>;

export type UseFetchReturn = ReturnType<typeof useFetch>;

export interface UseFetchDispatch<ResponseData = ApprovedAny>
  extends UseFetchDispatchCallbacks<ResponseData> {
  request?: FetchConfig;
}
