import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button } from './Button';

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
  buttonName: 'primary',
  buttonStyle: 'btn--primary',
  buttonSize: 'btn--medium',
};

Secondary.args = {
  buttonName: 'secondary',
  buttonStyle: 'btn--secondary',
  buttonSize: 'btn--small',
};

Disabled.args = {
  buttonName: 'disabled',
  buttonStyle: 'btn--disabled',
  buttonSize: 'btn--medium',
};
