import React, {useState} from 'react';
import {Drawer, useMantineTheme} from '@mantine/core';
import {
  IconFileLike,
  IconFileTime,
  IconFileDislike,
  IconSearch,
} from '@tabler/icons';
import dayjs from 'dayjs';

import {
  Accordion,
  Badge,
  Button,
  DatePicker,
  Grid,
  Group,
  Paper,
  ScrollArea,
  SimpleGrid,
  Stack,
  Table,
  Text,
  Textarea,
  TextInput,
} from 'components/UI/atoms';
import {FileItem, Modal, Th} from 'components/UI/molecules';
import {IdName} from 'models/ui';
import {ActionButton} from 'components/UI/molecules/ActionButton';
import {ModalType} from 'lib/constants';

export const CECApprovalView = () => {
  const theme = useMantineTheme();
  const getColor = (color: string) =>
    theme.colors[color][theme.colorScheme === 'dark' ? 5 : 7];

  const headCells: IdName[] = [
    {
      id: 'requestor',
      name: 'Requestor',
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

  const [opened, setOpened] = useState<boolean>(false);
  const [approveModal, setApproveModal] = useState<boolean>(false);
  const [rejectModal, setRejectModal] = useState<boolean>(false);

  return (
    <>
      <Text mt="xl" ml="sm" weight={'bold'} color={'orange'}>
        Deadline of CEC Request submission: April 30, 2023
      </Text>
      <Grid>
        <Grid.Col span={12}>
          <Paper withBorder radius="md" p="lg">
            <Group grow spacing={50} position="left">
              {/* <CECProgressChart
                cecPoints={currentCECPoints}
                pendingCECPoints={pendingCECPoints}
                targetCECPoints={40}
              ></CECProgressChart>
              <OngoingActivities /> */}
            </Group>
            <Group></Group>
          </Paper>
        </Grid.Col>

        <Grid.Col>
          <Paper>
            <Accordion
              variant="contained"
              radius="md"
              transitionDuration={1000}
            >
              <Accordion.Item value="pending">
                <Accordion.Control
                  icon={<IconFileTime color={getColor('yellow')} />}
                >
                  For Approval
                  <Badge color="yellow" size="lg" ml={'sm'}>
                    2
                  </Badge>
                </Accordion.Control>
                <Accordion.Panel>
                  <Paper withBorder radius="md" p="lg">
                    <Grid>
                      <Grid.Col span={12}>
                        <TextInput icon={<IconSearch />} mb="md" />
                      </Grid.Col>
                    </Grid>
                    <ScrollArea>
                      <Table>
                        <thead>
                          <tr>
                            {headCells.map(headCell => (
                              <Th key={headCell.id}>{headCell.name}</Th>
                            ))}
                            <Th isActionColumn>Actions</Th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>John Doe</td>
                            <td>Meetup moderator</td>
                            <td>2</td>
                            <td>01/04/2023 05:53pm</td>
                            <td>
                              <ActionButton
                                actionLabel="View"
                                onClick={() => {
                                  setOpened(true);
                                }}
                              />
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </ScrollArea>
                  </Paper>
                </Accordion.Panel>
              </Accordion.Item>
              <Accordion.Item value="approvedList">
                <Accordion.Control
                  icon={<IconFileLike color={getColor('green')} />}
                >
                  Approved
                  <Badge color="green" size="lg" ml={'sm'}>
                    2
                  </Badge>
                </Accordion.Control>
                <Accordion.Panel>
                  {/* <ActivityTable
                    activities={approvedList ? approvedList : []}
                    disableEditButton={true}
                    actionLabel={TableActions.Edit}
                  /> */}
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item value="rejected">
                <Accordion.Control
                  icon={<IconFileDislike color={getColor('red')} />}
                >
                  Rejected
                  <Badge color="red" size="lg" ml={'sm'}>
                    3
                  </Badge>
                </Accordion.Control>
                <Accordion.Panel>
                  {/* <ActivityTable
                    activities={rejectedList ? rejectedList : []}
                    disableEditButton={false}
                    actionLabel={TableActions.Edit}
                  /> */}
                </Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          </Paper>
        </Grid.Col>
      </Grid>
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        position="right"
        size="xl"
        title={
          <Text mb="md" px="md" pt="sm" size={'md'} weight="bold">
            John Doe
          </Text>
        }
      >
        <Stack px="lg" pb="lg">
          <Grid>
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
                  label="Activity"
                  value="Meetup moderator - 2 points"
                  readOnly
                />
                <Textarea
                  label="Activity Description"
                  value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed varius odio. Donec vitae nunc sed turpis laoreet porta vel dictum enim. Mauris bibendum magna eget ullamcorper consequat. Pellentesque sit amet odio risus. Nunc in ligula porta, consequat urna sed, vulputate leo. Nulla cursus est nulla, eget posuere mi gravida."
                  name="activityDescription"
                  minRows={5}
                  readOnly
                />
                <Group>
                  <DatePicker
                    label="Date Started"
                    name="dateStarted"
                    style={{height: '100%'}}
                    value={dayjs().toDate()}
                    readOnly
                  />
                  <DatePicker
                    label="Date Completed"
                    style={{height: '100%'}}
                    value={dayjs().toDate()}
                    name="dateCompleted"
                    readOnly
                  />
                </Group>
                <TextInput label="Approver" value="Baron Paredes" disabled />
                <Stack align="flex-start">
                  <FileItem
                    fileName="TestDoc.docx"
                    fileSize={1192971}
                    readOnly
                    index={0}
                  />
                </Stack>
                <Textarea
                  label="Approver's Comment"
                  value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed varius odio. Donec vitae nunc sed turpis laoreet porta vel dictum enim. Mauris bibendum magna eget ullamcorper consequat. Pellentesque sit amet odio risus. Nunc in ligula porta, consequat urna sed, vulputate leo. Nulla cursus est nulla, eget posuere mi gravida."
                  name="activityDescription"
                  minRows={3}
                  readOnly
                />
              </SimpleGrid>
            </Grid.Col>
          </Grid>
          <Group position="apart">
            <Button onClick={() => setOpened(false)} variant="outline" mt="lg">
              Back
            </Button>
            <Group>
              <Button
                onClick={() => setRejectModal(true)}
                mt="lg"
                color="orange"
                type="submit"
              >
                Reject
              </Button>
              <Button
                onClick={() => setApproveModal(true)}
                mt="lg"
                type="submit"
              >
                Approve
              </Button>
            </Group>
          </Group>
        </Stack>
      </Drawer>
      <Modal
        title="Reject CEC request?"
        opened={rejectModal}
        message="This action cannot be undone. Would you like to proceed?"
        type={ModalType.Warning}
        onCancel={() => setRejectModal(false)}
        onClose={() => setRejectModal(false)}
        onConfirm={() => {
          setRejectModal(false);
          setOpened(false);
        }}
      />
      <Modal
        title="Approve CEC request?"
        opened={approveModal}
        message="This action cannot be undone. Would you like to proceed?"
        type={ModalType.Warning}
        onCancel={() => setApproveModal(false)}
        onClose={() => setApproveModal(false)}
        onConfirm={() => {
          setApproveModal(false);
          setOpened(false);
        }}
      />
    </>
  );
};
