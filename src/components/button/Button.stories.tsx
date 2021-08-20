import React from 'react';
import { Meta, Story } from '@storybook/react';
import Button from './Button';

const meta: Meta = {
  title: 'Button',
  component: Button,
};

export default meta;

const Template: Story = (args) => (
  <Button buttonName onClick buttonStyle buttonSize {...args} />
);

export const Primary = Template.bind({});

export const Secondary = Template.bind({});

export const Disabled = Template.bind({});

Primary.args = {
  ButtonName: 'primary',
  buttonStyle: 'btn--primary',
  buttonSize: 'btn--medium',
};

Secondary.args = {
  ButtonName: 'secondary',
  buttonStyle: 'btn--secondary',
  buttonSize: 'btn--small',
};

Disabled.args = {
  ButtonName: 'disabled',
  buttonStyle: 'btn--disabled',
  buttonSize: 'btn--medium',
};
