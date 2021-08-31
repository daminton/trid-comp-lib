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

export const InlineLight = Template.bind({});
export const StackedLight = Template.bind({});
export const InlineDark = Template.bind({});
export const StackedDark = Template.bind({});

StackedLight.args = {
  variant: 'vlp--stacked--light',
  label: 'VLP--stacked--Light--Label',
  value: 'VLP--stacked--Light--value',
};

InlineLight.args = {
  variant: 'vlp--inline--light',
  label: 'VLP--inline--Light--Label',
  value: 'VLP--inline--Light--value',
};
StackedDark.args = {
  variant: 'vlp--stacked--dark',
  label: 'VLP--stacked--dark--Label',
  value: 'VLP--stacked--dark--value',
};

InlineDark.args = {
  variant: 'vlp--inline--dark',
  label: 'VLP--inline--dark--Label',
  value: 'VLP--inline--dark--value',
};
