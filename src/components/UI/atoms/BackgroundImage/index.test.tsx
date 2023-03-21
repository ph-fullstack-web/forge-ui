import React from 'react';
import {render, screen} from '@testing-library/react';

import background from 'lib/assets/cognizant_background.png';

import {BackgroundImage} from '.';

test('LoginBackground to be in document', () => {
  render(<BackgroundImage src={background} role="img" />);
  const element = screen.getByRole('img');

  expect(element).toBeInTheDocument();
  expect(element).toHaveStyle(`background-image: url(${background})`);
});
