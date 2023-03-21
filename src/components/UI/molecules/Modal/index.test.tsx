import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import {Modal} from '.';

test('Dialog to be in document', () => {
  const handleCancel = jest.fn();
  const handleConfirm = jest.fn();
  render(
    <Modal
      opened
      title="Dialog Title"
      message="Dialog Message"
      onCancel={handleCancel}
      onConfirm={handleConfirm}
      onClose={handleCancel}
      role="dialog"
    />
  );
  const element = screen.getAllByRole('dialog')[0];

  expect(element).toBeInTheDocument();
  expect(element).toHaveTextContent('Dialog Title');
  expect(element).toHaveTextContent('Dialog Message');
  expect(handleCancel).toBeCalledTimes(0);
  expect(handleConfirm).toBeCalledTimes(0);
});

test('Dialog to be cancelled', () => {
  const handleCancel = jest.fn();
  const handleConfirm = jest.fn();
  render(
    <Modal
      opened
      onClose={handleCancel}
      title="Dialog Title"
      message="Dialog Message"
      onCancel={handleCancel}
      onConfirm={handleConfirm}
      role="dialog"
    />
  );

  const cancelButtonElement = screen.getByRole('button', {name: 'Cancel'});

  userEvent.click(cancelButtonElement);

  expect(handleCancel).toBeCalledTimes(1);
});

test('Dialog to be confirmed', () => {
  const handleCancel = jest.fn();
  const handleConfirm = jest.fn();
  render(
    <Modal
      opened
      title="Dialog Title"
      message="Dialog Message"
      onCancel={handleCancel}
      onConfirm={handleConfirm}
      role="dialog"
      onClose={handleCancel}
    />
  );

  const confirmButtonElement = screen.getByRole('button', {name: 'Confirm'});

  userEvent.click(confirmButtonElement);

  expect(handleConfirm).toBeCalledTimes(1);
});
