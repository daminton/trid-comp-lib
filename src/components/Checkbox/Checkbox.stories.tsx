import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Checkbox } from './Checkbox';

const meta: Meta = {
  title: 'Checkbox',
  component: Checkbox,
};

export default meta;

const Template: Story = (args) => <Checkbox label checkboxStyle {...args} />;

export const Default = Template.bind({});
export const Disabled = Template.bind({});

Default.args = {
  checkboxStyle: 'chk--primary',
  label: 'Default ',
};

Disabled.args = {
  checkboxStyle: 'chk--disabled',
  label: 'Disabled ',
};
