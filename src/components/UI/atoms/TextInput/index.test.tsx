import React from 'react';
import {render, screen} from '@testing-library/react';

import {TextInput} from '.';

describe('text input to be okay', () => {
  beforeEach(() => {
    render(<TextInput />);
  });

  test('text input to be in document', () => {
    const element = screen.getByRole('textbox');

    expect(element).toBeInTheDocument();
  });

  test('text input to have mantine class', () => {
    const element = screen.getByRole('textbox');

    expect(element).toHaveClass('mantine-Input-input');
  });
});
