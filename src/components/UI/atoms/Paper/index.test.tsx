import React from 'react';
import {render, screen} from '@testing-library/react';

import {Paper} from '.';

describe('paper to be okay', () => {
  beforeEach(() => {
    render(<Paper />);
  });

  test('paper to be in document', () => {
    const element = screen.getByRole('paper');

    expect(element).toBeInTheDocument();
  });

  test('paper to have mantine class', () => {
    const element = screen.getByRole('paper');

    expect(element).toHaveClass('mantine-Paper-root');
  });
});
