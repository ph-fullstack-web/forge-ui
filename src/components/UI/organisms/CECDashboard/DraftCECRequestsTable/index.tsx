import React, {useMemo, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {Modal, Table} from 'components/UI/molecules';
import {ModalType, TableActions, TableRowDataType} from 'lib/constants';
import {CECRequest} from 'models/core';
import {CECRequestTableData, IdName, TableRowData} from 'models/ui';
import {PagePaths} from 'routes/PagePaths';
import {formatToDateTime} from 'lib/helpers';

interface DraftCECRequestsTableProps {
  activities: CECRequest[];
  onDeleteClick: (cecRequestId: string) => void;
  onDeleteCECRequest: (onSuccess: () => void, onFailure: () => void) => void;
}

export const DraftCECRequestsTable = ({
  activities,
  onDeleteClick,
  onDeleteCECRequest,
}: DraftCECRequestsTableProps) => {
  const [showModal, setShowModal] = useState<boolean>(false);
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

  const tableRowDataType = TableRowDataType.CECRequestDraft;

  const navigate = useNavigate();

  const handleRowClick = (cecRequest: CECRequestTableData) => {
    navigate(`${PagePaths.CECRequestEditor}/${cecRequest.cecRequestId}`);
  };

  const handleSecondActionClick = (cecRequest: CECRequestTableData) => {
    onDeleteClick(cecRequest.cecRequestId);
    setShowModal(true);
  };

  const handleConfirmDeleteClick = () => {
    onDeleteCECRequest(
      () => {
        setShowModal(false);
      },
      () => {}
    );
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
        actionLabel={TableActions.Edit}
        secondActionLabel={TableActions.Delete}
        onSecondActionClick={handleSecondActionClick}
      />
      <Modal
        title="Delete CEC request?"
        opened={showModal}
        message="This action cannot be undone. Would you like to proceed?"
        type={ModalType.Warning}
        onCancel={() => setShowModal(false)}
        onClose={() => setShowModal(false)}
        onConfirm={handleConfirmDeleteClick}
      />
    </>
  );
};
