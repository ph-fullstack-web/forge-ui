import {useEffect, DependencyList} from 'react';
import {UseFetchReturn} from '../useFetch/types';

export const useFetchEffect = (
  fetch: UseFetchReturn,
  dependencies: DependencyList = [],
  extension: {conditional?: boolean} = {conditional: true}
): void => {
  return useEffect(() => {
    // Call fetch with passed dispatchConfig
    if (extension.conditional) {
      fetch.dispatch({});
    }

    // Cleanup Function
    return () => {
      // Cancel Fetch when component unmounts
      fetch.cancel();
    };
  }, dependencies);
};

export default useFetchEffect;
