import React, {Component} from 'react';
import {Accordion as MantineAccordion, AccordionProps} from '@mantine/core';

export class Accordion extends Component<AccordionProps> {
  static Item = MantineAccordion.Item;
  static Control = MantineAccordion.Control;
  static Panel = MantineAccordion.Panel;

  render() {
    return <MantineAccordion multiple {...this.props} />;
  }
}
