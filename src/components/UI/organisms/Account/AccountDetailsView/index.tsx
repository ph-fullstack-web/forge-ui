import React from 'react';
import {createStyles, TextInput} from '@mantine/core';

import {Grid, Paper, SimpleGrid, Text} from 'components/UI/atoms';
import {Employee} from 'models/core';
import {formatDateShortFormat} from 'lib/helpers';

const useStyles = createStyles(theme => ({
  grid: {
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      flexDirection: 'column-reverse',
    },
  },
}));

type AccountDetailsViewProps = {
  accountDetails: Employee;
};

export const AccountDetailsView = ({
  accountDetails,
}: AccountDetailsViewProps) => {
  const {classes, theme} = useStyles();

  return (
    <Paper withBorder radius="md" p="lg">
      <Text mb="md" size={'md'} weight="bold">
        Employee Details
      </Text>

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
              label="Employee ID"
              value={accountDetails.employeeId}
              readOnly={true}
            />
            <TextInput
              label="Full Name"
              value={accountDetails.fullname}
              readOnly={true}
            />
            <TextInput
              label="Date Hired"
              value={formatDateShortFormat(accountDetails.dateHired)}
              readOnly={true}
            />
            <TextInput
              label="Community"
              value={accountDetails.community.name}
              readOnly={true}
            />
          </SimpleGrid>
        </Grid.Col>
      </Grid>
    </Paper>
  );
};
