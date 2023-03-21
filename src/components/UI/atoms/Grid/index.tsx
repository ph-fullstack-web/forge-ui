import React from 'react';
import {Grid as MantineGrid, GridProps} from '@mantine/core';

export class Grid extends React.Component<GridProps> {
  static Col = MantineGrid.Col;

  render() {
    return <MantineGrid {...this.props} />;
  }
}
