import React from 'react';
import {render, screen} from '@testing-library/react';

import {Container} from '.';

describe('container to be okay', () => {
  beforeEach(() => {
    render(<Container />);
  });

  test('container to be in document', () => {
    const element = screen.getByRole('container');

    expect(element).toBeInTheDocument();
  });

  test('container to have mantine class', () => {
    const element = screen.getByRole('container');

    expect(element).toHaveClass('mantine-Container-root');
  });
});
