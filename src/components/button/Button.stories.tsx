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

export const LargePrimary = Template.bind({});

export const LargeSecondary = Template.bind({});

export const LargeDisabled = Template.bind({});

export const Primary = Template.bind({});

export const Secondary = Template.bind({});

export const Disabled = Template.bind({});

LargePrimary.args = {
  buttonName: 'LargePrimary',
  buttonStyle: 'btn--primary',
  buttonSize: 'btn--large',
};

LargeSecondary.args = {
  buttonName: 'LargeSecondary',
  buttonStyle: 'btn--secondary',
  buttonSize: 'btn--large',
};

LargeDisabled.args = {
  buttonName: 'LargeDisabled',
  buttonStyle: 'btn--disabled',
  buttonSize: 'btn--large',
};

Primary.args = {
  buttonName: 'primary',
  buttonStyle: 'btn--primary',
  buttonSize: 'btn--medium',
};

Secondary.args = {
  buttonName: 'secondary',
  buttonStyle: 'btn--secondary',
  buttonSize: 'btn--medium',
};

Disabled.args = {
  buttonName: 'disabled',
  buttonStyle: 'btn--disabled',
  buttonSize: 'btn--medium',
};
