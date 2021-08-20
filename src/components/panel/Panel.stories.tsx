import React from 'react';
import { Meta, Story } from '@storybook/react';
import Panel from './Panel';

const meta: Meta = {
  title: 'Panel',
  component: Panel,
};

export default meta;

const Template: Story = (args) => <Panel className="" style {...args} />;

export const Default = Template.bind({});
export const Radius = Template.bind({});

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

Radius.args = {
  className: 'panel',
  style: {
    borderRadius: 20,
    backgroundColor: 'black',
    width: 700,
    height: 100,
    padding: 25,
    border: 25,
  },
};
