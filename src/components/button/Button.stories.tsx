import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button } from './Button';
import { SearchIcon } from '../..';

const meta: Meta = {
  title: 'Button',
  component: Button,
  argTypes: {
    buttonName: { control: 'text' },
    buttonStyle: {
      control: 'select',
      options: [
        'btn--dark',
        'btn--light',
        'btn--disabled',
        'btn--orchestrate',
        'btn--icon--dark',
        'btn--icon--light',
      ],
    },

    buttonSize: {
      control: 'select',
      options: ['btn--small', 'btn--medium', 'btn--large'],
    },
  },
};

export default meta;

const Template: Story = (args) => (
  <Button buttonName onClick buttonStyle buttonSize buttonIcon {...args} />
);

export const LargeDark = Template.bind({});
export const LargeLight = Template.bind({});
export const LargeDisabled = Template.bind({});
export const Dark = Template.bind({});
export const Light = Template.bind({});
export const Disabled = Template.bind({});
export const Orchestrate = Template.bind({});
export const Icon = Template.bind({});

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

Icon.args = {
  buttonName: 'Icon',
  buttonStyle: 'btn--icon--light',
  buttonSize: 'btn--medium',
  buttonIcon: <SearchIcon />,
};
