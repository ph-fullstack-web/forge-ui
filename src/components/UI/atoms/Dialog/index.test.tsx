import React from 'react';
import {render, screen} from '@testing-library/react';

import {Dialog} from '.';

describe('dialog to be okay', () => {
  test('dialog to be in document', () => {
    render(<Dialog opened>Dialog is opened</Dialog>);
    const element = screen.getByText('Dialog is opened');

    expect(element).toBeInTheDocument();
  });

  test('dialog to have mantine class', () => {
    render(<Dialog opened>Dialog is opened</Dialog>);
    const element = screen.getByText('Dialog is opened');

    expect(element).toHaveClass('mantine-Dialog-root');
  });

  test('dialog should not be in document', () => {
    render(<Dialog opened={false}>Dialog is closed</Dialog>);
    const element = screen.queryByText('Dialog is closed');

    expect(element).toBeNull();
  });
});
