import React from 'react';
import { Meta, Story } from '@storybook/react';
import ValueLabelPair from '../src/components/valueLabelPair';

const meta: Meta = {
  title: 'ValueLabelPair',
  component: ValueLabelPair,
};

export default meta;

const Template: Story = (args) => <ValueLabelPair {...args} />;

export const Default = Template.bind({});

Default.args = {
  className: 'Default',
  labelText: 'Default-Label',
  valueText: 'Default-Value',
};
