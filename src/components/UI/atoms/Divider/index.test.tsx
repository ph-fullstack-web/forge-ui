import React from 'react';
import {render, screen} from '@testing-library/react';

import {Divider} from '.';

describe('divider to be in document', () => {
  beforeEach(() => {
    render(<Divider />);
  });

  test('divider to be in document', () => {
    const element = screen.getByRole('divider');
    expect(element).toBeInTheDocument();
  });

  test('divider to have a mantine class', () => {
    const element = screen.getByRole('divider');
    expect(element).toHaveClass('mantine-Divider-root');
  });
});
