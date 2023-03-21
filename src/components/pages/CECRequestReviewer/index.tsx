import React from 'react';
// import {useParams} from 'react-router-dom';
// import {useFormik} from 'formik';
// import * as Yup from 'yup';

// import {CECRequestReviewer as TemplateCECRequestReview} from 'components/templates';
// import {useEffectOnce} from 'hooks';
// import {CECRequest} from 'models/business';
// import {CECStatus} from 'lib/constants';
// import {useCECRequestDataProvider} from 'providers';

export const CECRequestReviewer = () => {
  // const fileState = useState<File[] | null>(null);

  // const {
  //   actions: {
  //     setSelectedCECRequestId,
  //     approveCECRequest,
  //     rejectCECRequest,
  //     getCECRequest,
  //   },
  // } = useCECRequestDataProvider();

  // const {activityId} = useParams();
  // if (!activityId || isNaN(+activityId)) {
  //   return <></>;
  // }
  // const cecRequest = getCECRequest(+activityId, 'Pending');
  // if (cecRequest === undefined) {
  //   return <></>;
  // }

  // const formik = useFormik<CECRequest>({
  //   initialValues: {
  //     id: cecRequest === undefined ? undefined : cecRequest.id,
  //     activityCategory:
  //       cecRequest === undefined ? undefined : cecRequest.activityCategory,
  //     activityName: cecRequest === undefined ? '' : cecRequest.activityName,
  //     description: cecRequest === undefined ? '' : cecRequest.description,
  //     dateStarted:
  //       cecRequest === undefined ? undefined : cecRequest.dateStarted,
  //     dateCompleted:
  //       cecRequest === undefined ? undefined : cecRequest.dateCompleted,
  //     approverId: cecRequest === undefined ? undefined : cecRequest.approverId,
  //     approver: cecRequest === undefined ? undefined : cecRequest.approver,
  //     fileURLs: cecRequest === undefined ? [] : cecRequest.fileURLs,
  //     rejectReason: cecRequest === undefined ? '' : cecRequest.rejectReason,
  //     status: cecRequest === undefined ? CECStatus.Pending : cecRequest.status,
  //   },
  //   validationSchema: Yup.object({
  //     rejectReason: Yup.string().when('status', {
  //       is: 'Rejected',
  //       then: Yup.string().required('Rejection Reason is required'),
  //     }),
  //   }),
  //   onSubmit: (values, actions) => {
  //     const cecRequest: CECRequest = {
  //       id: values.id,
  //       activityCategory: values.activityCategory,
  //       activityName: values.activityName,
  //       description: values.description,
  //       dateStarted: values.dateStarted,
  //       dateCompleted: values.dateCompleted,
  //       approverId: values.approverId,
  //       approver: values.approver,
  //       fileURLs: values.fileURLs,
  //       status: values.status,
  //       rejectReason: values.rejectReason,
  //     };
  //     if (values.status === 'Approved') approveCECRequest(cecRequest);
  //     else rejectCECRequest(cecRequest);
  //     actions.setSubmitting(false);
  //   },
  // });

  // useEffect(() => {
  //   setSelectedCECRequest(cecRequest?.id);
  // }, [formik.values.cecRequestId]);

  // useEffectOnce(() => {
  //   return () => {
  //     setSelectedCECRequest(undefined);
  //   };
  // });

  // return <TemplateCECRequestReview formik={formik} fileState={fileState} />;
  return <>CEC Request Reviewer</>;
};
