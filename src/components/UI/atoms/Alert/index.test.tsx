import React from 'react';
import {render, screen} from '@testing-library/react';

import {Alert} from '.';

describe('alert to be in document', () => {
  beforeEach(() => {
    render(<Alert>alert test</Alert>);
  });

  test('alert to be in document', () => {
    const element = screen.getByRole('alert');
    expect(element).toBeInTheDocument();
  });

  test('alert to have a mantine class', () => {
    const element = screen.getByRole('alert');
    expect(element).toHaveClass('mantine-Alert-root');
  });

  test('alert to have "alert test" message', () => {
    const element = screen.getByText('alert test');
    expect(element).toBeInTheDocument();
  });
});
