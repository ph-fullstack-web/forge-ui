import React, {useEffect, useState} from 'react';
import {
  Grid,
  Group,
  MediaQuery,
  Paper,
  ScrollArea,
  Table as TableAtom,
  TableProps as TableAtomProps,
  Text,
  TextInput,
} from 'components/UI/atoms';
import {TableRowDataType} from 'lib/constants';
import {sortData} from 'lib/helpers';
import {IdName, TableRowData} from 'models/ui';
import {Th} from '../Th';
import {IconSearch} from '@tabler/icons';
import {ActionButton} from '../ActionButton';

export interface TableProps extends TableAtomProps {
  withActionColumn?: boolean;
  headCells: IdName[];
  rowData: TableRowData[];
  disableEditButton?: boolean;
  onEditActionClick: (selectedRow: TableRowData) => void;
  actionLabel: string;
  secondActionLabel?: string;
  onSecondActionClick?: (selectedRow: TableRowData) => void;
}

export const Table = ({
  rowData,
  headCells,
  withActionColumn,
  disableEditButton,
  onEditActionClick,
  actionLabel,
  secondActionLabel,
  onSecondActionClick,

  ...rest
}: TableProps) => {
  const [search, setSearch] = useState<string>('');
  const [sortedData, setSortedData] = useState<TableRowData[]>(rowData);
  const [sortBy, setSortBy] = useState<keyof TableRowData | null>(null);
  const [reverseSortDirection, setReverseSortDirection] = useState(false);

  const setSorting = (field: keyof TableRowData) => {
    const reversed = field === sortBy ? !reverseSortDirection : false;
    setReverseSortDirection(reversed);
    setSortBy(field);
    setSortedData(sortData(rowData, {sortBy: field, reversed, search}));
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {value} = event.currentTarget;
    setSearch(value);
    setSortedData(
      sortData(rowData, {sortBy, reversed: reverseSortDirection, search: value})
    );
  };

  const handleEditActionClick = (row: TableRowData) => {
    onEditActionClick(row);
  };

  const actionButton = (data: TableRowData) => (
    <ActionButton
      actionLabel={actionLabel}
      onClick={() => handleEditActionClick(data)}
      disabled={disableEditButton}
    />
  );

  const secondActionButton = (data: TableRowData) => (
    <ActionButton
      actionLabel={secondActionLabel}
      onClick={() => onSecondActionClick && onSecondActionClick(data)}
    />
  );

  const getTBodyRow = (data: TableRowData) => {
    switch (data.tableRowDataType) {
      case TableRowDataType.CECRequestDraft:
        return (
          <>
            <td>{data.activityCategory}</td>
            <td>{data.activityName}</td>
            <td>{data.cecPoints}</td>
            <td>{data.dateCreated}</td>
            <td>
              <Group spacing="xs">
                {actionButton(data)}
                {secondActionButton(data)}
              </Group>
            </td>
          </>
        );

      case TableRowDataType.CECRequestPending:
        return (
          <>
            <td>{data.activityCategory}</td>
            <td>{data.activityName}</td>
            <td>{data.cecPoints}</td>
            <td>{data.dateCreated}</td>
            <td>{actionButton(data)}</td>
          </>
        );

      case TableRowDataType.CECRequest:
        return (
          <>
            <td>{data.activityCategory}</td>
            <td>{data.activityName}</td>
            <td>{data.cecPoints}</td>
            <td>{data.dateCreated}</td>
            <td>{actionButton(data)}</td>
          </>
        );
    }
  };

  const getListRow = (data: TableRowData) => {
    switch (data.tableRowDataType) {
      case TableRowDataType.CECRequestDraft:
        return (
          <Paper radius="md" p="md">
            <Text size="sm">{data.activityName}</Text>
            <Group spacing="xs" position="apart">
              <Text size="xs" color="dimmed">
                {data.activityCategory}
              </Text>
              <Text size="xs" color="dark.3">
                {data.cecPoints} point{data.cecPoints > 1 && 's'}
              </Text>
            </Group>
            <Group spacing="xs" pt={10}>
              {actionButton(data)}
              {secondActionButton(data)}
            </Group>
          </Paper>
        );

      case TableRowDataType.CECRequestPending:
      case TableRowDataType.CECRequest:
        return (
          <Paper radius="md" p="md">
            <Text size="sm">{data.activityName}</Text>
            <Group spacing="xs" position="apart">
              <Text size="xs" color="dimmed">
                {data.activityCategory}
              </Text>
              <Text size="xs" color="dark.3">
                {data.cecPoints} point{data.cecPoints > 1 && 's'}
              </Text>
            </Group>
            <Group spacing="xs" pt={10}>
              {actionButton(data)}
            </Group>
          </Paper>
        );
    }
  };

  useEffect(() => {
    setSortedData(rowData);
  }, [rowData]);

  return (
    <Paper withBorder radius="md" p="lg">
      <Grid>
        <Grid.Col span={12}>
          <TextInput
            icon={<IconSearch />}
            mb="md"
            value={search}
            onChange={handleSearchChange}
          />
        </Grid.Col>
      </Grid>
      <ScrollArea>
        <MediaQuery smallerThan={800} styles={{display: 'none'}}>
          <TableAtom {...rest}>
            <thead>
              <tr>
                {headCells.map(headCell => (
                  <Th
                    key={headCell.id}
                    reversed={reverseSortDirection}
                    sorted={sortBy === headCell.id}
                    onSort={() => setSorting(headCell.id as keyof TableRowData)}
                  >
                    {headCell.name}
                  </Th>
                ))}
                {withActionColumn && <Th isActionColumn>Actions</Th>}
              </tr>
            </thead>
            <tbody>
              {sortedData?.length !== 0 &&
                sortedData.map(data => (
                  <tr key={data.key}>{getTBodyRow(data)}</tr>
                ))}
              {sortedData?.length === 0 && (
                <tr>
                  <td colSpan={headCells.length}>
                    <Group position="center">
                      <Text color="dimmed" size="md">
                        No data found
                      </Text>
                    </Group>
                  </td>
                </tr>
              )}
            </tbody>
          </TableAtom>
        </MediaQuery>
        <MediaQuery largerThan={800} styles={{display: 'none'}}>
          <TableAtom>
            <tbody>
              {sortedData?.length !== 0 &&
                sortedData.map(data => (
                  <tr key={data.key}>
                    <td>{getListRow(data)}</td>
                  </tr>
                ))}
              {sortedData?.length === 0 && (
                <tr>
                  <td colSpan={headCells.length}>
                    <Group position="center">
                      <Text color="dimmed" size="md">
                        No data found
                      </Text>
                    </Group>
                  </td>
                </tr>
              )}
            </tbody>
          </TableAtom>
        </MediaQuery>
      </ScrollArea>
    </Paper>
  );
};
