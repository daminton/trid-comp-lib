import React from 'react';
import { Meta, Story } from '@storybook/react';
import ValueLabelPair from './ValueLabelPair';

const meta: Meta = {
  title: 'ValueLabelPair',
  component: ValueLabelPair,
};

export default meta;

const Template: Story = (args) => (
  <ValueLabelPair className="" label="" value {...args} />
);

export const Inline = Template.bind({});
export const Stacked = Template.bind({});

Inline.args = {
  className: 'Default',
  label: 'Default-Label',
  value: 'Default-Value',
};

Stacked.args = {
  className: 'Stacked',
  label: 'Stacked-Label',
  value: 'Stacked-Value',
};
