import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import {DeleteButton} from '.';

test('DeleteButton to be in document', () => {
  render(<DeleteButton />);
  const element = screen.getByRole('button');
  const deleteIconElement = screen.getByTestId('DeleteIcon');

  expect(element).toBeInTheDocument();
  expect(element).toHaveClass('MuiIconButton-root');
  expect(element).toHaveStyle({backgroundColor: 'transparent'});
  expect(element).toContainElement(deleteIconElement);
});

test('DeleteButton clicked', () => {
  const handleClick = jest.fn();
  render(<DeleteButton onClick={handleClick} />);
  const element = screen.getByRole('button');

  userEvent.click(element);

  expect(handleClick).toBeCalledTimes(1);
});
