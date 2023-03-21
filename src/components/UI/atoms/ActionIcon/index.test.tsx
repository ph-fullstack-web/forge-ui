import React from 'react';
import {IconTrash} from '@tabler/icons';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import {ActionIcon} from '.';

describe('action icon to be okay', () => {
  test('action icon to be in document', () => {
    render(<ActionIcon />);
    const element = screen.getByRole('button');
    expect(element).toBeInTheDocument();
  });

  test('action icon with icon', () => {
    render(
      <ActionIcon>
        <IconTrash role="action-icon" />
      </ActionIcon>
    );
    const element = screen.getByRole('button');
    const deleteIconElement = screen.getByRole('action-icon');

    expect(element).toContainElement(deleteIconElement);
  });

  test('action icon clicked', async () => {
    const handleClick = jest.fn();
    render(<ActionIcon onClick={handleClick} />);

    const element = screen.getByRole('button');
    await userEvent.click(element);

    expect(handleClick).toBeCalledTimes(1);
  });
});
