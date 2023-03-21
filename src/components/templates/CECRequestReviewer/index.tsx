import React from 'react';
import {FormikProps} from 'formik';

import {CECRequestReviewForm} from 'components/UI/organisms';
import {CECRequest} from 'models/core';

interface CECReviewerProps {
  formik: FormikProps<CECRequest>;
  fileState: [
    File[] | null,
    React.Dispatch<React.SetStateAction<File[] | null>>
  ];
}

export const CECRequestReviewer = ({formik, fileState}: CECReviewerProps) => {
  return <CECRequestReviewForm formik={formik} fileState={fileState} />;
};
