import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ValueLabelPair } from './ValueLabelPair';

const meta: Meta = {
  title: 'ValueLabelPair',
  component: ValueLabelPair,
};

export default meta;

const Template: Story = (args) => (
  <ValueLabelPair variant label="" value {...args} />
);

export const Inline = Template.bind({});
export const Stacked = Template.bind({});

Inline.args = {
  variant: 'inline',
  label: 'Default-Label',
  value: 'Default-Value',
};

Stacked.args = {
  variant: 'stacked',
  label: 'Stacked-Label',
  value: 'Stacked-Value',
};
