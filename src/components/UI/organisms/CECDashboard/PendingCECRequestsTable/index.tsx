import React, {useMemo} from 'react';
import {useNavigate} from 'react-router-dom';
import {Table} from 'components/UI/molecules';
import {TableActions, TableRowDataType} from 'lib/constants';
import {CECRequest} from 'models/core';
import {CECRequestTableData, IdName, TableRowData} from 'models/ui';
import {PagePaths} from 'routes/PagePaths';
import {formatToDateTime} from 'lib/helpers';

interface PendingCECRequestsTableProps {
  activities: CECRequest[];
}

export const PendingCECRequestsTable = ({
  activities,
}: PendingCECRequestsTableProps) => {
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
      id: 'cecPoints',
      name: 'CEC Points',
    },
    {
      id: 'dateCreated',
      name: 'Date Created',
    },
  ];

  const tableRowDataType = TableRowDataType.CECRequestPending;

  const navigate = useNavigate();

  const handleRowClick = (cecRequest: CECRequestTableData) => {
    navigate(`${PagePaths.CECRequestView}/${cecRequest.cecRequestId}`);
  };

  const rowData = useMemo(() => {
    return (
      activities?.map(
        (cecRequest, index) =>
          ({
            key: cecRequest.cecRequestId?.toString() ?? index.toString(),
            tableRowDataType,
            activityCategory: cecRequest.activity?.activityCategory,
            activityName: cecRequest.activity?.name,
            cecPoints: cecRequest.activity?.points,
            cecRequestId: cecRequest.cecRequestId ?? index,
            dateCreated: formatToDateTime(cecRequest.dateCreated),
          } as unknown as TableRowData)
      ) ?? []
    );
  }, [activities]);

  return (
    <>
      <Table
        headCells={headCells}
        rowData={rowData}
        sx={{minWidth: 950}}
        withActionColumn={true}
        disableEditButton={false}
        onEditActionClick={handleRowClick}
        actionLabel={TableActions.View}
      />
    </>
  );
};
