import React, {useEffect} from 'react';
import {createStyles, Text} from '@mantine/core';
import dayjs from 'dayjs';
import {FormikProps} from 'formik';
import {
  Button,
  DatePicker,
  Grid,
  Group,
  Paper,
  SimpleGrid,
  TextInput,
  Textarea,
} from 'components/UI/atoms';
import {CECRequest} from 'models/core';

const useStyles = createStyles(theme => ({
  files: {
    boxSizing: 'border-box',
    border: '1px solid #ced4da',
    borderRadius: '4px',
    margin: 0,
    minHeight: '50px',
    padding: '0 10px 10px 10px',
  },
  grid: {
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      flexDirection: 'column-reverse',
    },
  },
  anchor: {
    display: 'block',
  },
}));

interface CECReviewFormProps {
  formik: FormikProps<CECRequest>;
  fileState: [
    File[] | null,
    React.Dispatch<React.SetStateAction<File[] | null>>
  ];
}

export const CECRequestReviewForm = ({
  formik,
  fileState,
}: CECReviewFormProps) => {
  const [files] = fileState;
  const {classes, theme} = useStyles();

  const {values, handleChange, handleSubmit} = formik;

  useEffect(() => {}, []);

  return (
    <Paper withBorder radius="md" p="lg">
      <form onSubmit={handleSubmit}>
        <Grid className={classes.grid}>
          <Grid.Col md={12}>
            <SimpleGrid
              cols={1}
              breakpoints={[
                {maxWidth: theme.breakpoints.lg, cols: 2},
                {maxWidth: theme.breakpoints.md, cols: 3},
                {maxWidth: theme.breakpoints.sm, cols: 2},
                {maxWidth: theme.breakpoints.xs, cols: 1},
              ]}
            >
              <TextInput
                label="Activity Category"
                name="activityCategory"
                disabled
                // value={values.activityCategory?.name?.toString()}
              />
              <TextInput
                label="Activity Name"
                // value={values.activityName.toString()}
                name="activityName"
                disabled
              />
              <Textarea
                label="Activity Description"
                // value={values.description.toString()}
                name="description"
                disabled
              />
              <DatePicker
                label="Date Started"
                name="dateStarted"
                maxDate={dayjs(new Date()).toDate()}
                value={
                  values.dateStarted ? dayjs(values.dateStarted).toDate() : null
                }
                disabled
              />
              <DatePicker
                label="Date Completed"
                maxDate={dayjs(new Date()).toDate()}
                value={
                  values.dateCompleted
                    ? dayjs(values.dateCompleted).toDate()
                    : null
                }
                name="dateCompleted"
                disabled
              />
              <TextInput
                label="Approver"
                name="Approver"
                // value={values.approver?.toString()}
                disabled
              />
              <>
                {files && files.length > 0 ? (
                  <Text size="sm" mt="sm" weight={500}>
                    Selected files:
                  </Text>
                ) : null}
              </>
              <Text>Attachments:</Text>
              <Grid className={classes.files}>
                {/* <Grid.Col span={12}>
                  {values.fileURLs
                    ? values.fileURLs.map((file, index) => (
                        <Text
                          className={classes.anchor}
                          key={index}
                          variant="link"
                          component="a"
                          href={file}
                          target="_blank"
                          size="sm"
                          mt="sm"
                        >
                          {file}
                        </Text>
                      ))
                    : null}
                </Grid.Col> */}
              </Grid>
              <Textarea
                label="Reason for Rejection"
                name="rejectReason"
                onChange={handleChange}
                // value={values.rejectReason?.toString()}
                // error={touched.rejectReason ? errors.rejectReason : ''}
              ></Textarea>
            </SimpleGrid>
          </Grid.Col>
        </Grid>
        <Group position="right">
          <Button
            // onClick={() => (values.status = CECStatus.Approved)}
            mt="lg"
            type="submit"
          >
            Approve
          </Button>
          <Button
            // onClick={() => (values.status = CECStatus.Rejected)}
            mt="lg"
            type="submit"
          >
            Reject
          </Button>
        </Group>
      </form>
    </Paper>
  );
};
