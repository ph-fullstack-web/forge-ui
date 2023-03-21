import React from 'react';
import {createStyles} from '@mantine/core';

import {
  Grid,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
  TextInput,
} from 'components/UI/atoms';
import {
  DateRangePicker,
  FileItem,
  FormButtonGroup,
} from 'components/UI/molecules';
import {CECRequest} from 'models/core';

const useStyles = createStyles(theme => ({
  grid: {
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      flexDirection: 'column-reverse',
    },
  },
}));

interface CECRequestViewFormProps {
  cecRequest: CECRequest;
  approverName: string;
  onBackClick: () => void;
}

export const CECRequestViewForm = ({
  cecRequest,
  approverName,
  onBackClick,
}: CECRequestViewFormProps) => {
  const {classes, theme} = useStyles();

  const {
    activity,
    activityDescription,
    attachments,
    dateStarted,
    dateCompleted,
  } = cecRequest;

  return (
    <Paper withBorder radius="md" p="lg">
      <Text mb="md" size={'md'} weight="bold">
        CEC Request
      </Text>
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
            <TextInput
              label="Activity"
              value={`${activity.name} - ${activity.points} ${
                activity.points === 1 ? 'point' : 'points'
              }`}
              readOnly
            />
            <Textarea
              label="Activity Description"
              value={activityDescription}
              name="activityDescription"
              readOnly
            />
            <DateRangePicker
              dateStart={dateStarted}
              dateEnd={dateCompleted}
              readonly
            />
            <TextInput
              label="Approver (based on your current community manager)"
              value={approverName}
              disabled
            />
            <Stack align="flex-start">
              {attachments?.map((attachment, index) => (
                <FileItem
                  key={index}
                  index={index}
                  fileName={attachment.fileName}
                  fileSize={attachment.fileSize}
                  signedUrl={attachment.signedUrl}
                  readOnly
                />
              ))}
            </Stack>
          </SimpleGrid>
        </Grid.Col>
      </Grid>
      <FormButtonGroup onBackClick={onBackClick} />
    </Paper>
  );
};
