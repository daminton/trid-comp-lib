import React from 'react';
import { Meta, Story } from '@storybook/react';
import Panel from '../src/components/panel/Panel';

const meta: Meta = {
  title: 'Panel',
  component: Panel,
};

export default meta;

const Template: Story = (args) => <Panel {...args} />;

export const Default = Template.bind({});

Default.args = {
  className: 'panel',
  style: {
    backgroundColor: 'black',
    width: 700,
    height: 100,
    padding: 25,
    border: 25,
  },
};
