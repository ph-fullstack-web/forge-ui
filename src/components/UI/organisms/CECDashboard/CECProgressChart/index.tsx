import React from 'react';

import {Group, RingProgressChart, Text} from 'components/UI/atoms';

type CECProgressChartProps = {
  cecPoints: number;
  pendingCECPoints: number;
  targetCECPoints: number;
};

export const CECProgressChart = ({
  cecPoints,
  pendingCECPoints,
  targetCECPoints,
}: CECProgressChartProps) => {
  const chartInnerLabel = `${cecPoints} pts`;
  const currentPointsPercent = (cecPoints / targetCECPoints) * 100;
  const pendingPointsPercent = (pendingCECPoints / targetCECPoints) * 100;

  return (
    <div>
      <Group position="center">
        <Text size="md" weight="bold" align="center">
          CEC Progress Summary
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
          Target CEC Points ({targetCECPoints} pts)
        </Text>
      </Group>
    </div>
  );
};
