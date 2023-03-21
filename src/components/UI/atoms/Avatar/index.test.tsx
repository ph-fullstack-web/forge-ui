import React from 'react';
import {render, screen} from '@testing-library/react';

import {Avatar} from '.';

describe('avatar to be okay', () => {
  beforeEach(() => {
    render(<Avatar />);
  });

  test('avatar to be in document', () => {
    const element = screen.getByRole('avatar');
    expect(element).toBeInTheDocument();
  });

  test('avatar to have a mantine class', () => {
    const element = screen.getByRole('avatar');
    expect(element).toHaveClass('mantine-Avatar-root');
  });
});
