import {useFetch} from 'hooks';
import {HTTPMethod} from 'lib/constants';
import {CECRequest} from 'models/core';
import {apiRoutes} from 'services/apiRoutes';
import {ServiceBase} from 'services/ServiceBase';

export class CECRequestService extends ServiceBase {
  useGetCECRequests = () => {
    return useFetch<ApprovedAny>({
      method: HTTPMethod.POST,
      headers: {
        Authorization: this.bearer,
      },
      url: apiRoutes.graphql(),
      data: {
        query: `
        {
          cecRequests {
            cecRequestId,
            activity {
              activityCategory,
              activityId,
              name,
              points,
            },
            activityDescription,
            dateStarted,
            dateCompleted,
            dateEvaluated,
            status,
            userId,
            approverUserId,
            attachments,
          }
        }
        `,
      },
    });
  };

  useGetCECRequestsByUserId = (userId: string) => {
    return useFetch<ApprovedAny>({
      method: HTTPMethod.POST,
      headers: {
        Authorization: this.bearer,
      },
      url: apiRoutes.graphql(),
      data: {
        query: `
          query cecRequests($userId: String!) {
            cecRequests(userId: $userId) {
              cecRequestId,
              activity {
                activityCategory,
                activityId,
                name,
                points,
              },
              activityDescription,
              dateCreated,
              dateStarted,
              dateCompleted,
              dateEvaluated,
              status,
              userId,
              approverUserId,
              attachments {
                fileName,
                fileSize,
                signedUrl,
              }
            }
          }
        `,
        variables: {
          userId,
        },
      },
    });
  };

  useGetCECRequestAttachmentsByCECRequestId = (cecRequestId: string) => {
    return useFetch<ApprovedAny>({
      method: HTTPMethod.POST,
      headers: {
        Authorization: this.bearer,
      },
      url: apiRoutes.graphql(),
      data: {
        query: `
          query cecRequest($cecRequestId: String!) {
            cecRequest(cecRequestId: $cecRequestId) {
              attachments {
                fileName,
                fileSize,
                signedUrl,
              }
            }
          }
        `,
        variables: {
          cecRequestId,
        },
      },
    });
  };

  useGetCECRequestByCECRequestId = (cecRequestId: string) => {
    return useFetch<ApprovedAny>({
      method: HTTPMethod.POST,
      headers: {
        Authorization: this.bearer,
      },
      url: apiRoutes.graphql(),
      data: {
        query: `
          query cecRequest($cecRequestId: String!) {
            cecRequest(cecRequestId: $cecRequestId) {
              cecRequestId,
              activity {
                activityCategory,
                activityId,
                name,
                points,
              },
              activityDescription,
              dateCreated,
              dateStarted,
              dateCompleted,
              dateEvaluated,
              status,
              userId,
              approverUserId,
              attachments {
                fileName,
                fileSize,
                signedUrl,
              }
            }
          }
        `,
        variables: {
          cecRequestId,
        },
      },
    });
  };

  useUpdateCECRequest = () => {
    return useFetch<CECRequest>({
      method: HTTPMethod.POST,
      url: apiRoutes.cecRequest.createCECRequest(),
      headers: {
        Authorization: this.bearer,
      },
    });
  };

  useDeleteCECRequest = (id: string) => {
    return useFetch<CECRequest>({
      method: HTTPMethod.DELETE,
      url: apiRoutes.cecRequest.deleteCECRequest(id),
      headers: {
        Authorization: this.bearer,
      },
    });
  };

  useCreateCECRequest = () => {
    return useFetch<string>({
      method: HTTPMethod.POST,
      url: apiRoutes.cecRequest.createCECRequest(),
      headers: {
        Authorization: this.bearer,
      },
    });
  };

  useUploadAttachments = () => {
    return useFetch<void>({
      method: HTTPMethod.POST,
      url: apiRoutes.cecRequest.uploadCECRequestAttachments(),
      headers: {
        Authorization: this.bearer,
      },
    });
  };

  useRemoveAttachment = () => {
    return useFetch<void>({
      method: HTTPMethod.POST,
      url: apiRoutes.cecRequest.removeCECRequestAttachment(),
      headers: {
        Authorization: this.bearer,
      },
    });
  };
}

export default CECRequestService;
