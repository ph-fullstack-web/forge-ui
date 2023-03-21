import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import {Table} from 'components/UI/molecules';
// import {DeleteButton, EditButton, Table} from 'components/UI/molecules';
// import {Box, TableCell, TableRow} from 'components/UI/atoms';

export default {
  title: 'Molecules/Table',
  component: Table,
  // subcomponents: {TableRow, TableCell, Box, DeleteButton, EditButton},
} as ComponentMeta<typeof Table>;

const EmptyTemplate: ComponentStory<typeof Table> = args => <Table {...args} />;

export const Empty = EmptyTemplate.bind({});
Empty.args = {
  headCells: [
    {
      id: 'header1',
      name: 'Header 1',
    },
    {
      id: 'header2',
      name: 'Header 2',
    },
    {
      id: 'header3',
      name: 'Header 3',
    },
  ],
};

const WithDataTemplate: ComponentStory<typeof Table> = args => (
  <Table {...args}>
    {/* <TableRow>
      <TableCell component="th" scope="row">
        Item A-1
      </TableCell>
      <TableCell>Item A-2</TableCell>
      <TableCell>Item A-3</TableCell>
    </TableRow>
    <TableRow>
      <TableCell component="th" scope="row">
        Item B-1
      </TableCell>
      <TableCell>Item B-2</TableCell>
      <TableCell>Item B-3</TableCell>
    </TableRow> */}
  </Table>
);

export const WithData = WithDataTemplate.bind({});
WithData.args = {
  headCells: [
    {
      id: 'header1',
      name: 'Header 1',
    },
    {
      id: 'header2',
      name: 'Header 2',
    },
    {
      id: 'header3',
      name: 'Header 3',
    },
  ],
};

const EmptyActionTemplate: ComponentStory<typeof Table> = args => (
  <Table {...args} />
);

export const EmptyAction = EmptyActionTemplate.bind({});
EmptyAction.args = {
  headCells: [
    {
      id: 'header1',
      name: 'Header 1',
    },
    {
      id: 'header2',
      name: 'Header 2',
    },
    {
      id: 'header3',
      name: 'Header 3',
    },
  ],
  // actionHeader: true,
};

const WithDataActionTemplate: ComponentStory<typeof Table> = args => (
  <Table {...args}>
    {/* <TableRow>
      <TableCell component="th" scope="row">
        Item A-1
      </TableCell>
      <TableCell>Item A-2</TableCell>
      <TableCell>Item A-3</TableCell>
      <TableCell width="8%" padding="none">
        <Box>
          <EditButton />
          <DeleteButton />
        </Box>
      </TableCell>
    </TableRow>
    <TableRow>
      <TableCell component="th" scope="row">
        Item B-1
      </TableCell>
      <TableCell>Item B-2</TableCell>
      <TableCell>Item B-3</TableCell>
      <TableCell width="8%" padding="none">
        <Box>
          <EditButton />
          <DeleteButton />
        </Box>
      </TableCell>
    </TableRow> */}
  </Table>
);

export const WithDataAction = WithDataActionTemplate.bind({});
WithDataAction.args = {
  headCells: [
    {
      id: 'header1',
      name: 'Header 1',
    },
    {
      id: 'header2',
      name: 'Header 2',
    },
    {
      id: 'header3',
      name: 'Header 3',
    },
  ],
  // actionHeader: true,
};
