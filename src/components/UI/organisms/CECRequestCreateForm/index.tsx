import React, {useState, useMemo, useEffect} from 'react';
import {createStyles} from '@mantine/core';
import {useFormik, getIn} from 'formik';
import * as Yup from 'yup';

import {
  Grid,
  Paper,
  Select,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
  TextInput,
} from 'components/UI/atoms';
import {
  DateRangePicker,
  FileItem,
  FilesDropzone,
  FormButtonGroup,
} from 'components/UI/molecules';
import {CECRequestStatus} from 'lib/constants';
import {getActivityListAsDropdown, getDateTimeNow} from 'lib/helpers';
import {CECRequest, Activity} from 'models/core';
import {defaultCECRequest} from 'models/defaultValues';

const useStyles = createStyles(theme => ({
  grid: {
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      flexDirection: 'column-reverse',
    },
  },
}));

interface CECRequestCreateFormProps {
  activityList: Activity[];
  userId: string;
  approverName: string;
  onAddCECRequest: (
    newCECRequest: CECRequest,
    attachments: File[],
    onSuccess: () => void,
    onFailure: () => void
  ) => void;
  onBackClick: () => void;
}

export const CECRequestCreateForm = ({
  activityList,
  userId,
  approverName,
  onAddCECRequest,
  onBackClick,
}: CECRequestCreateFormProps) => {
  const [attachments, setAttachments] = useState<File[]>([]);
  const [activity, setActivity] = useState<Activity[]>([]);

  const {classes, theme} = useStyles();

  const activityDropdownList = useMemo(() => {
    if (!activityList) return [];
    return getActivityListAsDropdown(activityList);
  }, [activityList]);

  const formik = useFormik<CECRequest>({
    initialValues: {
      ...defaultCECRequest,
      userId,
      dateCreated: getDateTimeNow(),
    },
    validationSchema: Yup.object({
      activity: Yup.object().shape({
        activityId: Yup.string().nullable().required('Activity required'),
      }),
      activityDescription: Yup.string()
        .trim()
        .required('Activity description required'),
      dateStarted: Yup.date()
        .nullable()
        .when('status', {
          is: CECRequestStatus.Pending,
          then: Yup.date()
            .nullable()
            .required('Date started is required when submitting'),
        }),
      dateCompleted: Yup.date()
        .nullable()
        .when('status', {
          is: CECRequestStatus.Pending,
          then: Yup.date()
            .nullable()
            .required('Date completed is required when submitting'),
        })
        .min(
          Yup.ref('dateStarted'),
          'Date completed must not be less than Date started'
        )
        .max(new Date(), 'Date completed must be greater than current date'),
    }),
    onSubmit: (values, actions) => {
      onAddCECRequest(
        values,
        attachments,
        () => {
          actions.setSubmitting(false);
        },
        () => {
          actions.setSubmitting(false);
        }
      );
    },
  });

  const {
    values,
    errors,
    touched,
    isSubmitting,
    setFieldValue,
    setFieldTouched,
    handleChange,
    handleSubmit,
  } = formik;

  const handleSelectCategoryChange = (value: string) => {
    const selectedActivity = activity.find(
      activity => activity.activityId.toString() === (value?.toString() ?? '')
    );
    setFieldValue('activity.activityId', value);
    setFieldValue(
      'activity.activityCategory',
      selectedActivity?.activityCategory
    );
    setFieldValue('activity.name', selectedActivity?.name);
    setFieldValue('activity.points', selectedActivity?.points);
    setFieldTouched('activity', false, false);
  };

  const handleDateStartedChanged = (value: Date | null) => {
    setFieldValue('dateStarted', value);
  };

  const handleDateCompletedChanged = (value: Date | null) => {
    setFieldValue('dateCompleted', value);
  };

  const handleOnDrop = (uploadedFiles: File[]) => {
    setAttachments(uploadedFiles);
  };

  const handleRemoveFile = (index: number) => {
    const newAttachments = Array.from(attachments);
    newAttachments.splice(index, 1);
    setAttachments(newAttachments);
  };

  const handleSubmitClick = () => {
    setFieldValue('status', CECRequestStatus.Pending);
  };

  const handleSaveClick = () => {
    setFieldValue('status', CECRequestStatus.Draft);
  };

  useEffect(() => {
    setActivity(activityList);
  }, [activityList]);

  return (
    <Paper withBorder radius="md" p="lg">
      <Text mb="md" size={'md'} weight="bold">
        Submit New CEC Request
      </Text>
      <form onSubmit={handleSubmit}>
        <Grid className={classes.grid}>
          <Grid.Col md={12}>
            <SimpleGrid
              cols={1}
              breakpoints={[
                {maxWidth: theme.breakpoints.lg, cols: 2},
                {maxWidth: theme.breakpoints.md, cols: 2},
                {maxWidth: theme.breakpoints.sm, cols: 2},
                {maxWidth: theme.breakpoints.xs, cols: 1},
              ]}
            >
              <Select
                data={activityDropdownList}
                label="Activity"
                name="activity.activityId"
                searchable
                clearable
                value={values.activity.activityId}
                onChange={handleSelectCategoryChange}
                error={
                  touched.activity
                    ? errors.activity
                      ? getIn(errors.activity, 'activityId')
                      : ''
                    : ''
                }
              />
              <Textarea
                label="Activity Description"
                value={values.activityDescription}
                name="activityDescription"
                onChange={handleChange}
                error={
                  touched.activityDescription ? errors.activityDescription : ''
                }
              />
              <DateRangePicker
                dateStart={values.dateStarted}
                dateStartError={
                  touched.dateStarted
                    ? errors.dateStarted
                      ? getIn(errors, 'dateStarted')
                      : ''
                    : ''
                }
                onDateStartChange={handleDateStartedChanged}
                dateEnd={values.dateCompleted}
                dateEndError={
                  touched.dateCompleted
                    ? errors.dateCompleted
                      ? getIn(errors, 'dateCompleted')
                      : ''
                    : ''
                }
                onDateEndChange={handleDateCompletedChanged}
              />
              <TextInput
                label="Approver (based on your current community manager)"
                value={approverName}
                disabled
              />
              {attachments.length === 0 && (
                <FilesDropzone onDropFiles={handleOnDrop} />
              )}
              {attachments.length > 0 && (
                <Stack align="flex-start">
                  {attachments.map((attachment, index) => (
                    <FileItem
                      key={index}
                      index={index}
                      fileName={attachment.name}
                      fileSize={attachment.size}
                      onRemoveFile={handleRemoveFile}
                    />
                  ))}
                </Stack>
              )}
            </SimpleGrid>
          </Grid.Col>
        </Grid>
        <FormButtonGroup
          onBackClick={onBackClick}
          firstButtonLabel="Submit"
          secondButtonLabel="Save as Draft"
          disabled={isSubmitting}
          onFirstButtonClick={handleSubmitClick}
          onSecondButtonClick={handleSaveClick}
        />
      </form>
    </Paper>
  );
};
