import React, {Component} from 'react';
import {Menu as MantineMenu, MenuProps} from '@mantine/core';

export class Menu extends Component<MenuProps> {
  static Target = MantineMenu.Target;
  static Dropdown = MantineMenu.Dropdown;
  static Item = MantineMenu.Item;
  static Label = MantineMenu.Label;

  render() {
    return <MantineMenu {...this.props} />;
  }
}
