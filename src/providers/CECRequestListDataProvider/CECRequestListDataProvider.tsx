import React, {useEffect, useMemo, useReducer, useState} from 'react';
import {useNavigate} from 'react-router-dom';

import {PageLoader} from 'components/UI/molecules';
import {useAuthContext, useNotification} from 'hooks';
import {CECRequestStatus, NotificationType} from 'lib/constants';
import {CECRequest, CECRequestAttachment} from 'models/core';
import {PagePaths} from 'routes/PagePaths';
import {CECRequestService} from 'services';

import {CECRequestListDataContext} from './CECRequestListDataContext';
import {
  CECRequestListContextActionTypes,
  cecRequestReducer,
  initialCECState,
} from './CECRequestListReducer';

type CECRequestListDataProviderProps = ComponentWithChildren;

export const CECRequestListDataProvider = ({
  children,
}: CECRequestListDataProviderProps) => {
  const {isLoggedIn, userId} = useAuthContext();
  const [selectedCECRequestId, setSelectedCECRequestId] = useState<string>('');
  const [store, dispatch] = useReducer(cecRequestReducer, initialCECState);
  const [approvedCECRequests, setApprovedCECRequests] = useState<CECRequest[]>(
    []
  );
  const [pendingCECRequests, setPendingCECRequests] = useState<CECRequest[]>(
    []
  );
  const [rejectedCECRequests, setRejectedCECRequests] = useState<CECRequest[]>(
    []
  );
  const [draftCECRequests, setDraftCECRequests] = useState<CECRequest[]>([]);
  const [attachmentsToggle, setAttachmentsToggle] = useState<boolean>(false);

  const navigate = useNavigate();
  const notify = useNotification();

  const {
    useUpdateCECRequest,
    useDeleteCECRequest,
    useCreateCECRequest,
    useUploadAttachments,
    useRemoveAttachment,
    useGetCECRequestsByUserId,
    useGetCECRequestAttachmentsByCECRequestId,
  } = new CECRequestService();

  const updateCECRequest = useUpdateCECRequest();
  const deleteCECRequest = useDeleteCECRequest(selectedCECRequestId);
  const createCECRequest = useCreateCECRequest();
  const uploadAttachments = useUploadAttachments();
  const removeAttachment = useRemoveAttachment();
  const getCECRequestsByUserId = useGetCECRequestsByUserId(userId);
  const getCECRequestsAttachmentsByCECRequestId =
    useGetCECRequestAttachmentsByCECRequestId(selectedCECRequestId);

  const handleUpdateCECRequest = (
    updatedCECRequest: CECRequest,
    newAttachments: File[],
    onSuccess: () => void,
    onFailure: () => void
  ) => {
    const {cecRequestId} = updatedCECRequest;

    updateCECRequest.dispatch({
      request: {data: updatedCECRequest},
      onSuccess: () => {
        if (newAttachments.length > 0) {
          const formData = new FormData();
          newAttachments.forEach(attachment =>
            formData.append('files', attachment)
          );
          formData.append('cecRequestId', cecRequestId);
          formData.append('userId', userId);

          uploadAttachments.dispatch({
            request: {data: formData},
            onSuccess: () => {
              dispatch({
                type: CECRequestListContextActionTypes.Update,
                payload: {
                  updatedCECRequest: updatedCECRequest,
                },
              });

              setAttachmentsToggle(prev => !prev);
              notify(
                NotificationType.Success,
                'CEC Request updated successfully'
              );
              navigate(PagePaths.CECTracker);
              onSuccess();
            },
            onFailure: error => {
              notify(NotificationType.Error, error.message);
            },
          });
        } else {
          dispatch({
            type: CECRequestListContextActionTypes.Update,
            payload: {
              updatedCECRequest: updatedCECRequest,
            },
          });
          notify(NotificationType.Success, 'CEC Request updated successfully');
          navigate(PagePaths.CECTracker);
        }
        onSuccess();
      },
      onFailure: error => {
        notify(NotificationType.Error, error.message);
        onFailure();
      },
    });
  };

  const handleGetCECRequest = (cecRequestId: string) => {
    return store.cecRequestList.find(
      cecRequest => cecRequest.cecRequestId === cecRequestId
    );
  };

  const handleDeleteCECRequest = (
    onSuccess: () => void,
    onFailure: () => void
  ) => {
    deleteCECRequest.dispatch({
      request: {data: {cecRequestId: selectedCECRequestId}},
      onSuccess: () => {
        dispatch({
          type: CECRequestListContextActionTypes.Delete,
          payload: {
            deletedCECRequestId: selectedCECRequestId,
          },
        });
        notify(NotificationType.Success, 'CEC Request deleted successfully');
        navigate(PagePaths.CECTracker);
        onSuccess();
      },
      onFailure: error => {
        notify(NotificationType.Error, error.message);
        onFailure();
      },
    });
  };

  const handleAddCECRequest = (
    newCECRequest: CECRequest,
    attachments: File[],
    onSuccess: () => void,
    onFailure: () => void
  ) => {
    createCECRequest.dispatch({
      request: {data: newCECRequest},
      onSuccess: ({data: cecRequestId}) => {
        newCECRequest.cecRequestId = cecRequestId;
        setSelectedCECRequestId(cecRequestId);
        if (attachments.length > 0) {
          const formData = new FormData();
          attachments.forEach(attachment =>
            formData.append('files', attachment)
          );
          formData.append('cecRequestId', cecRequestId);
          formData.append('userId', userId);

          uploadAttachments.dispatch({
            request: {data: formData},
            onSuccess: () => {
              dispatch({
                type: CECRequestListContextActionTypes.Create,
                payload: {
                  newCECRequest: newCECRequest,
                },
              });
              setAttachmentsToggle(prev => !prev);
              notify(
                NotificationType.Success,
                'CEC Request created successfully'
              );
              navigate(PagePaths.CECTracker);
              onSuccess();
            },
            onFailure: error => {
              notify(NotificationType.Error, error.message);
            },
          });
        } else {
          dispatch({
            type: CECRequestListContextActionTypes.Create,
            payload: {
              newCECRequest: newCECRequest,
            },
          });
          notify(NotificationType.Success, 'CEC Request created successfully');
          navigate(PagePaths.CECTracker);
        }
        onSuccess();
      },
      onFailure: error => {
        notify(NotificationType.Error, error.message);
        onFailure();
      },
    });
  };

  const handleSetSelectedCECRequestId = (cecRequestId: string) => {
    setSelectedCECRequestId(cecRequestId);
  };

  const handleDeleteCECRequestAttachment = (
    updatedCECRequest: CECRequest,
    attachment: CECRequestAttachment,
    onSuccess: () => void,
    onFailure: () => void
  ) => {
    const removeAttachmentData = {
      userId,
      cecRequestId: updatedCECRequest.cecRequestId,
      file: attachment,
    };
    updateCECRequest.dispatch({
      request: {data: updatedCECRequest},
      onSuccess: () => {
        removeAttachment.dispatch({
          request: {data: removeAttachmentData},
          onSuccess: () => {
            updatedCECRequest.attachments =
              updatedCECRequest.attachments.filter(
                request =>
                  request.fileName !== removeAttachmentData.file.fileName
              );

            dispatch({
              type: CECRequestListContextActionTypes.Update,
              payload: {
                updatedCECRequest: updatedCECRequest,
              },
            });

            notify(NotificationType.Success, 'Attachment deleted successfully');
            onSuccess();
          },
          onFailure: error => {
            notify(NotificationType.Error, error.message);
            onFailure();
          },
        });
      },
      onFailure: error => {
        notify(NotificationType.Error, error.message);
        onFailure();
      },
    });
  };

  const currentCECPoints = useMemo(() => {
    if (approvedCECRequests.length) {
      return approvedCECRequests.reduce((a, b) => {
        return a + b.activity.points;
      }, 0);
    }

    return 0;
  }, [approvedCECRequests]);

  const pendingCECPoints = useMemo(() => {
    if (pendingCECRequests.length) {
      return pendingCECRequests.reduce((a, b) => {
        return a + b.activity.points;
      }, 0);
    }

    return 0;
  }, [pendingCECRequests]);

  useEffect(() => {
    const {cecRequestList} = store;

    const approvedCECRequests = cecRequestList.filter(
      cecRequest => cecRequest.status === CECRequestStatus.Approved
    );
    setApprovedCECRequests(approvedCECRequests);

    const pendingCECRequests = cecRequestList.filter(
      cecRequest => cecRequest.status === CECRequestStatus.Pending
    );
    setPendingCECRequests(pendingCECRequests);

    const rejectedCECRequests = cecRequestList.filter(
      cecRequest => cecRequest.status === CECRequestStatus.Rejected
    );
    setRejectedCECRequests(rejectedCECRequests);

    const draftCECRequests = cecRequestList.filter(
      cecRequest => cecRequest.status === CECRequestStatus.Draft
    );
    setDraftCECRequests(draftCECRequests);
  }, [store.cecRequestList]);

  useEffect(() => {
    if (isLoggedIn && userId) {
      getCECRequestsByUserId.dispatch({
        onSuccess: ({data}: ApprovedAny) => {
          if (data.data) {
            dispatch({
              type: CECRequestListContextActionTypes.LoadComplete,
              payload: {
                cecRequestList: data.data.cecRequests,
              },
            });
          } else {
            dispatch({
              type: CECRequestListContextActionTypes.LoadComplete,
              payload: {
                cecRequestList: [],
              },
            });
          }
        },
      });
    }
  }, [isLoggedIn, userId]);

  useEffect(() => {
    if (!selectedCECRequestId) return;

    getCECRequestsAttachmentsByCECRequestId.dispatch({
      onSuccess: ({data}) => {
        const cecRequest = store.cecRequestList?.find(
          request => request.cecRequestId === selectedCECRequestId
        );

        if (cecRequest) {
          cecRequest.attachments = data.data?.cecRequest?.attachments ?? [];

          dispatch({
            type: CECRequestListContextActionTypes.Update,
            payload: {
              updatedCECRequest: cecRequest,
            },
          });
        }
      },
    });
  }, [attachmentsToggle]);

  if (store.isDataLoading) {
    return <PageLoader />;
  }

  return (
    <CECRequestListDataContext.Provider
      value={{
        currentCECPoints: currentCECPoints,
        pendingCECPoints: pendingCECPoints,
        approvedCECRequestList: approvedCECRequests,
        pendingCECRequestList: pendingCECRequests,
        rejectedCECRequestList: rejectedCECRequests,
        draftCECRequestList: draftCECRequests,
        actions: {
          addCECRequest: handleAddCECRequest,
          getCECRequest: handleGetCECRequest,
          updateCECRequest: handleUpdateCECRequest,
          deleteCECRequest: handleDeleteCECRequest,
          setSelectedCECRequestId: handleSetSelectedCECRequestId,
          deleteCECRequestAttachment: handleDeleteCECRequestAttachment,
        },
      }}
    >
      {children}
    </CECRequestListDataContext.Provider>
  );
};
