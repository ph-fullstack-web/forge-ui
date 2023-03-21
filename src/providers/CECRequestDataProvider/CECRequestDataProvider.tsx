import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

import {CECRequest} from 'models/core';
import {CECRequestService} from 'services';

import {CECRequestDataContext} from './CECRequestDataContext';

type CECRequestDataProviderProps = ComponentWithChildren;

export const CECRequestDataProvider = ({
  children,
}: CECRequestDataProviderProps) => {
  const [selectedCECRequest, setSelectedCECRequest] = useState<
    CECRequest | undefined
  >(undefined);
  const [selectedCECRequestId, setSelectedCECRequestId] = useState<
    string | undefined
  >('');

  const {cecRequestId} = useParams();

  const {useGetCECRequestByCECRequestId} = new CECRequestService();

  const getCECRequestByCECRequestId = useGetCECRequestByCECRequestId(
    selectedCECRequestId ?? ''
  );

  const handleGetCECRequest = () => {
    getCECRequestByCECRequestId.dispatch({
      onSuccess: ({data}) => {
        const cecRequest = data.data?.cecRequest;

        setSelectedCECRequest(cecRequest);
      },
    });
  };

  useEffect(() => {
    setSelectedCECRequestId(cecRequestId);
  }, [cecRequestId]);

  useEffect(() => {
    handleGetCECRequest();
  }, [selectedCECRequestId]);

  return (
    <CECRequestDataContext.Provider
      value={{
        selectedCECRequest: selectedCECRequest,
      }}
    >
      {children}
    </CECRequestDataContext.Provider>
  );
};
