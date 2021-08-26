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

export const LargeDark = Template.bind({});
export const LargeLight = Template.bind({});
export const LargeDisabled = Template.bind({});
export const Dark = Template.bind({});
export const Light = Template.bind({});
export const Disabled = Template.bind({});
export const Orchestrate = Template.bind({});

LargeDark.args = {
  buttonName: 'LargeDark',
  buttonStyle: 'btn--dark',
  buttonSize: 'btn--large',
};

LargeLight.args = {
  buttonName: 'LargeLight',
  buttonStyle: 'btn--light',
  buttonSize: 'btn--large',
};

LargeDisabled.args = {
  buttonName: 'LargeDisabled',
  buttonStyle: 'btn--disabled',
  buttonSize: 'btn--large',
};

Dark.args = {
  buttonName: 'Dark',
  buttonStyle: 'btn--dark',
  buttonSize: 'btn--medium',
};

Light.args = {
  buttonName: 'Light',
  buttonStyle: 'btn--light',
  buttonSize: 'btn--medium',
};

Disabled.args = {
  buttonName: 'Disabled',
  buttonStyle: 'btn--disabled',
  buttonSize: 'btn--medium',
};

Orchestrate.args = {
  buttonName: 'Orchestrate',
  buttonStyle: 'btn--orchestrate',
};
