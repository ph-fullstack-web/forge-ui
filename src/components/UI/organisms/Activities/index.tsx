import React from 'react';
import {useNavigate} from 'react-router-dom';
import {Table} from 'components/UI/molecules';
import {TableRowDataType} from 'lib/constants';
import {CECRequest} from 'models/core';
import {CECRequestTableData, IdName, TableRowData} from 'models/ui';
import {PagePaths} from 'routes/PagePaths';

interface ActivityTableProps {
  activities: CECRequest[];
  disableEditButton: boolean;
  actionLabel: string;
}

export const ActivityTable = ({
  activities,
  disableEditButton,
  actionLabel,
}: ActivityTableProps) => {
  const headCells: IdName[] = [
    {
      id: 'activityCategory',
      name: 'Activity Category',
    },
    {
      id: 'activityName',
      name: 'Activity Name',
    },
    {
      id: 'status',
      name: 'Status',
    },
    {
      id: 'cecPoints',
      name: 'CEC Points',
    },
  ];

  const tableRowDataType = TableRowDataType.CECRequest;

  const navigate = useNavigate();

  const handleRowClick = (cecRequest: CECRequestTableData) => {
    navigate(`${PagePaths.CECRequestEditor}/${cecRequest.cecRequestId}`);
  };

  const rowData =
    activities?.map(
      (cecRequest, index) =>
        ({
          key: cecRequest.cecRequestId?.toString() ?? index.toString(),
          tableRowDataType,
          activityCategory: cecRequest.activity?.activityCategory,
          activityName: cecRequest.activity?.name,
          status: cecRequest.status,
          cecPoints: cecRequest.activity?.points,
          cecRequestId: cecRequest.cecRequestId ?? index,
        } as unknown as TableRowData)
    ) ?? [];

  return (
    <>
      <Table
        headCells={headCells}
        rowData={rowData}
        sx={{minWidth: 950}}
        withActionColumn={true}
        disableEditButton={disableEditButton}
        onEditActionClick={handleRowClick}
        actionLabel={actionLabel}
      />
    </>
  );
};
