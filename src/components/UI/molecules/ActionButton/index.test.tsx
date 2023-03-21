import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import {ActionButton} from '.';

test('ActionButton to be in document', () => {
  render(<ActionButton />);
  const element = screen.getByRole('button');
  const editIconElement = screen.getByTestId('EditIcon');

  expect(element).toBeInTheDocument();
  expect(element).toHaveClass('MuiIconButton-root');
  expect(element).toHaveStyle({backgroundColor: 'transparent'});
  expect(element).toContainElement(editIconElement);
});

test('ActionButton clicked', () => {
  const handleClick = jest.fn();
  render(<ActionButton onClick={handleClick} />);
  const element = screen.getByRole('button');

  userEvent.click(element);

  expect(handleClick).toBeCalledTimes(1);
});
