import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import {EditButton} from '.';

test('EditButton to be in document', () => {
  render(<EditButton />);
  const element = screen.getByRole('button');
  const editIconElement = screen.getByTestId('EditIcon');

  expect(element).toBeInTheDocument();
  expect(element).toHaveClass('MuiIconButton-root');
  expect(element).toHaveStyle({backgroundColor: 'transparent'});
  expect(element).toContainElement(editIconElement);
});

test('EditButton clicked', () => {
  const handleClick = jest.fn();
  render(<EditButton onClick={handleClick} />);
  const element = screen.getByRole('button');

  userEvent.click(element);

  expect(handleClick).toBeCalledTimes(1);
});
