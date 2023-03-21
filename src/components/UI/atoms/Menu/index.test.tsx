import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import {Menu} from '.';

describe('menu to be okay', () => {
  beforeEach(() => {
    render(
      <Menu>
        <Menu.Target>
          <button type="button">Click Me</button>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item>Item 1</Menu.Item>
          <Menu.Item>Item 2</Menu.Item>
          <Menu.Item>Item 3</Menu.Item>
        </Menu.Dropdown>
      </Menu>
    );
  });

  test('menu items does not show when not clicked', async () => {
    const element = screen.getByRole('button');
    expect(element).toBeInTheDocument();

    const menuItems = screen.queryAllByRole('menuitem');
    expect(menuItems.length).toBe(0);
  });

  test('menu items does show when clicked', async () => {
    const element = screen.getByRole('button');
    expect(element).toBeInTheDocument();

    await userEvent.click(element);

    const menuItems = screen.getAllByRole('menuitem');
    expect(menuItems.length).toEqual(3);
  });
});
