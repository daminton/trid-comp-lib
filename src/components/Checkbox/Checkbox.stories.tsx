import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Checkbox } from './Checkbox';

const meta: Meta = {
  title: 'Checkbox',
  component: Checkbox,
  argTypes: {
    checkboxStyle: {
      control: 'select',
      options: ['chk--light', 'chk--disabled', 'chk--dark'],
    },
    label: { control: 'text' },
  },
};

export default meta;

const Template: Story = (args) => <Checkbox label checkboxStyle {...args} />;

export const Light = Template.bind({});
export const Disabled = Template.bind({});
export const Dark = Template.bind({});

Light.args = {
  checkboxStyle: 'chk--light',
  label: 'Light ',
};

Disabled.args = {
  checkboxStyle: 'chk--disabled',
  label: 'Disabled ',
};

Dark.args = {
  checkboxStyle: 'chk--dark',
  label: 'Dark ',
};
