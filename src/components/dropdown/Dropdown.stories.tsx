import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Dropdown } from './Dropdown';

const meta: Meta = {
  title: 'Dropdown',
  component: Dropdown,
};

export default meta;

const Template: Story = (args) => <Dropdown tabs={[]} {...args} />;

export const Default = Template.bind({});

Default.args = {
  tabs: ['foo', 'bar'],
};
