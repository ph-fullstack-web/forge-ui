import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import {AddButton} from '.';

test('AddButton to be in document', () => {
  render(<AddButton />);
  const element = screen.getByRole('button');
  const addIconElement = screen.getByTestId('AddIcon');

  expect(element).toBeInTheDocument();
  expect(element).toHaveClass('MuiIconButton-root');
  expect(element).toHaveStyle({backgroundColor: 'transparent'});
  expect(element).toContainElement(addIconElement);
});

test('AddButton clicked', () => {
  const handleClick = jest.fn();
  render(<AddButton onClick={handleClick} />);
  const element = screen.getByRole('button');

  userEvent.click(element);

  expect(handleClick).toBeCalledTimes(1);
});
