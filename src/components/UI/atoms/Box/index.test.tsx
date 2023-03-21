import React from 'react';
import {render, screen} from '@testing-library/react';

import {Box} from '.';

describe('box to be okay', () => {
  beforeEach(() => {
    render(<Box />);
  });

  test('box to be in document', () => {
    const element = screen.getByRole('box');
    expect(element).toBeInTheDocument();
  });
});
