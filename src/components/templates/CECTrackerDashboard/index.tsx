import React from 'react';
import {useMantineTheme} from '@mantine/core';
import {
  IconFileLike,
  IconFileDislike,
  IconFileCode2,
  IconFileReport,
} from '@tabler/icons';

import {
  Accordion,
  Badge,
  Button,
  Grid,
  Paper,
  Text,
  Group,
} from 'components/UI/atoms';
import {ActivityTable} from 'components/UI/organisms';
import {CECRequest} from 'models/core';
import {TableActions} from 'lib/constants';
import {
  CECProgressChart,
  DraftCECRequestsTable,
  PendingCECRequestsTable,
} from 'components/UI/organisms/CECDashboard';
import {OngoingActivities} from 'components/UI/organisms/ActivityNotice';

interface CECTrackerDashboardTemplateProps {
  currentCECPoints: number;
  pendingCECPoints: number;
  approvedList?: CECRequest[];
  pendingList?: CECRequest[];
  rejectedList?: CECRequest[];
  draftList?: CECRequest[];
  onAddClick: () => void;
  onDeleteClick: (cecRequestId: string) => void;
  onDeleteCECRequest: (onSuccess: () => void, onFailure: () => void) => void;
}

export const CECTrackerDashboardTemplate = ({
  currentCECPoints,
  pendingCECPoints,
  approvedList,
  pendingList,
  rejectedList,
  draftList,
  onAddClick,
  onDeleteClick,
  onDeleteCECRequest,
}: CECTrackerDashboardTemplateProps) => {
  const theme = useMantineTheme();
  const getColor = (color: string) =>
    theme.colors[color][theme.colorScheme === 'dark' ? 5 : 7];

  const handleAddButtonClick = () => onAddClick();

  return (
    <>
      <Grid justify="space-between">
        <Text mt="xl" ml="sm" weight={'bold'} color={'orange'}>
          Deadline of CEC Request submission: April 30, 2023
        </Text>
        <Button mt="sm" mb="md" mr="sm" ml="sm" onClick={handleAddButtonClick}>
          Add New CEC Request
        </Button>
      </Grid>
      <Grid>
        <Grid.Col span={12}>
          <Paper withBorder radius="md" p="lg">
            <Grid>
              <Grid.Col sm={6} xs={12}>
                <CECProgressChart
                  cecPoints={currentCECPoints}
                  pendingCECPoints={pendingCECPoints}
                  targetCECPoints={40}
                />
              </Grid.Col>
              <Grid.Col sm={6} xs={12}>
                <Grid justify="center">
                  <Grid.Col sm={12} xs={8}>
                    <OngoingActivities />
                  </Grid.Col>
                </Grid>
              </Grid.Col>
            </Grid>
          </Paper>
        </Grid.Col>

        <Grid.Col>
          <Paper>
            <Accordion
              variant="contained"
              radius="md"
              transitionDuration={1000}
            >
              <Accordion.Item value="draft">
                <Accordion.Control
                  disabled={!draftList || draftList.length === 0}
                  icon={<IconFileCode2 color={getColor('violet')} />}
                >
                  <Group>
                    <Text fw={500}>Draft</Text>
                    <Badge color="violet" size="lg" ml={'sm'}>
                      {draftList ? draftList.length : '0'}
                    </Badge>
                  </Group>
                </Accordion.Control>
                <Accordion.Panel>
                  <DraftCECRequestsTable
                    activities={draftList ? draftList : []}
                    onDeleteClick={onDeleteClick}
                    onDeleteCECRequest={onDeleteCECRequest}
                  />
                </Accordion.Panel>
              </Accordion.Item>
              <Accordion.Item value="pending">
                <Accordion.Control
                  disabled={!pendingList || pendingList.length === 0}
                  icon={<IconFileReport color={getColor('yellow')} />}
                >
                  <Group>
                    <Text fw={500}>Pending</Text>
                    <Badge color="yellow" size="lg" ml={'sm'}>
                      {pendingList ? pendingList.length : '0'}
                    </Badge>
                  </Group>
                </Accordion.Control>
                <Accordion.Panel>
                  <PendingCECRequestsTable
                    activities={pendingList ? pendingList : []}
                  />
                </Accordion.Panel>
              </Accordion.Item>
              <Accordion.Item value="approvedList">
                <Accordion.Control
                  disabled={!approvedList || approvedList.length === 0}
                  icon={<IconFileLike color={getColor('green')} />}
                >
                  <Group>
                    <Text fw={500}>Approved</Text>
                    <Badge color="green" size="lg" ml={'sm'}>
                      {approvedList ? approvedList.length : '0'}
                    </Badge>
                  </Group>
                </Accordion.Control>
                <Accordion.Panel>
                  <ActivityTable
                    activities={approvedList ? approvedList : []}
                    disableEditButton={true}
                    actionLabel={TableActions.Edit}
                  />
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item value="rejected">
                <Accordion.Control
                  disabled={!rejectedList || rejectedList.length === 0}
                  icon={<IconFileDislike color={getColor('red')} />}
                >
                  <Group>
                    <Text fw={500}>Rejected</Text>
                    <Badge color="red" size="lg" ml={'sm'}>
                      {rejectedList ? rejectedList.length : '0'}
                    </Badge>
                  </Group>
                </Accordion.Control>
                <Accordion.Panel>
                  <ActivityTable
                    activities={rejectedList ? rejectedList : []}
                    disableEditButton={false}
                    actionLabel={TableActions.Edit}
                  />
                </Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          </Paper>
        </Grid.Col>
      </Grid>
    </>
  );
};
