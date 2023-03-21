import React from 'react';
// import {IconTrash} from '@tabler/icons';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import {Button} from 'components/UI/atoms';

export default {
  title: 'Atoms/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => (
  <Button {...args}>Button</Button>
);

export const Default = Template.bind({});

export const PrimaryColor = Template.bind({});

PrimaryColor.args = {
  color: 'primary',
};

export const OutlinedVariant = Template.bind({});

OutlinedVariant.args = {
  // variant: 'outlined',
};

export const StartIcon = Template.bind({});

StartIcon.args = {
  // startIcon: <IconTrash />,
};
