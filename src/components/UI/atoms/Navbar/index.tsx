import React, {Component} from 'react';
import {Navbar as MantineNavbar, NavbarProps} from '@mantine/core';

export class Navbar extends Component<NavbarProps> {
  static Section = MantineNavbar.Section;

  render() {
    return <MantineNavbar {...this.props} />;
  }
}
