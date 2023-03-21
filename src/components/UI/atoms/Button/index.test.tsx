import React from 'react';
import {MantineProvider} from '@mantine/core';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import {Button} from '.';

describe('button to be okay', () => {
  const handleClick = jest.fn();
  beforeEach(() => {
    render(
      <MantineProvider
        theme={{
          colors: {
            'csv-blue': ['#92BBE6', '#6AA2DC', '#2F78C4', '#000048'],
            'csv-plum': ['#85A0F9', '#7373D8', '#2E308E'],
            'csv-gray': ['#F6F6F5', '#EFEFEE', '#D0D0CE', '#97999B', '#53565A'],
          },
        }}
        withNormalizeCSS
        withGlobalStyles
      >
        <Button onClick={handleClick}>Click Me!</Button>
      </MantineProvider>
    );
  });
  test('button to be in document', () => {
    const element = screen.getByRole('button');
    expect(element).toBeInTheDocument();
  });

  test('button to have a mantine class', () => {
    const element = screen.getByRole('button');
    expect(element).toHaveClass('mantine-Button-root');
  });

  test('button clicked', async () => {
    const element = screen.getByRole('button');
    await userEvent.click(element);

    expect(handleClick).toBeCalledTimes(1);
  });

  test('button to have a same label', () => {
    const element = screen.getByText('Click Me!');

    expect(element).toBeInTheDocument();
  });
});
