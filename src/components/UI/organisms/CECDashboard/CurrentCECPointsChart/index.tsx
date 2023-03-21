import React from 'react';

import {Group, RingProgressChart, Text} from 'components/UI/atoms';

type CurrentCECPointsChartProps = {
  cecPoints: number;
  targetCECPoints: number;
};

export const CurrentCECPointsChart = ({
  cecPoints,
  targetCECPoints,
}: CurrentCECPointsChartProps) => {
  const chartInnerLabel = `${cecPoints} pts`;
  const currentProgress = (cecPoints / targetCECPoints) * 100;

  return (
    <div>
      <Group position="center">
        <Text size="md" weight="bold" align="center">
          Accomplished CEC Points
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
              value: currentProgress,
              color: 'green',
              tooltip: `You have ${cecPoints} approved CEC points`,
            },
          ]}
        />
      </Group>
      <Group position="center">
        <Text size="sm" weight="normal" align="center">
          Target CEC Points ({targetCECPoints})
        </Text>
      </Group>
    </div>
  );
};
