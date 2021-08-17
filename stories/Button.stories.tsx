import React, { Children } from 'react';
import { Meta, Story } from '@storybook/react';
import Button from '../src/components/button/Button';
import { action } from '@storybook/addon-actions';

const meta: Meta = {
  title: 'Button',
  component: Button,
  argTypes: {
    onClick: { actions: 'clicked' },
    children: {
      defaultValue: 'Default Text',
    },
  },
};

export default meta;

const Template: Story = (args) => (
  <Button children variant="primary" {...args} />
);

export const Default = Template.bind({});

export const Secondary = Template.bind({});

Secondary.args = {
  variant: 'Secondary',
  children: 'Secondary',
  onClick: action('secondary'),
};
