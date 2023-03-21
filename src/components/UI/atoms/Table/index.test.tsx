import React from 'react';
import {render, screen} from '@testing-library/react';

import {Table} from '.';

describe('table to be okay', () => {
  beforeEach(() => {
    render(<Table />);
  });

  test('table to be in document', () => {
    const element = screen.getByRole('table');

    expect(element).toBeInTheDocument();
  });

  test('table to have mantine class', () => {
    const element = screen.getByRole('table');

    expect(element).toHaveClass('mantine-Table-root');
  });
});
