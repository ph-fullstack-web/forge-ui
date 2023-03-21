import React from 'react';

import {Group, RingProgressChart, Text} from 'components/UI/atoms';

type PendingCECPointsChartProps = {
  cecPoints: number;
  pendingCECPoints: number;
  targetCECPoints: number;
};

export const PendingCECPointsChart = ({
  cecPoints,
  pendingCECPoints,
  targetCECPoints,
}: PendingCECPointsChartProps) => {
  const chartInnerLabel = `${cecPoints + pendingCECPoints} pts`;
  const currentPointsPercent = (cecPoints / targetCECPoints) * 100;
  const pendingPointsPercent = (pendingCECPoints / targetCECPoints) * 100;

  return (
    <div>
      <Group position="center">
        <Text size="md" weight="bold" align="center">
          With Pending CEC Points
        </Text>
      </Group>
      <Group position="center">
        <RingProgressChart
          size={120}
          thickness={12}
          roundCaps
          label={
            <Text size="md" weight="bold" align="center">
              {chartInnerLabel}
            </Text>
          }
          sections={[
            {
              value: pendingPointsPercent,
              color: 'yellow',
              tooltip: `You have ${pendingCECPoints} pending CEC points`,
            },
            {
              value: currentPointsPercent,
              color: 'green',
              tooltip: `You have ${cecPoints} approved CEC points`,
            },
          ]}
        />
      </Group>
      <Group position="center">
        <Text size="sm" weight="normal" align="center">
          Pending CEC Points ({pendingCECPoints})
        </Text>
      </Group>
    </div>
  );
};
