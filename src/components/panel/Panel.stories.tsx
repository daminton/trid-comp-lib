import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Panel } from './Panel';

const meta: Meta = {
  title: 'Panel',
  component: Panel,
};

export default meta;

const Template: Story = (args) => <Panel panelStyle {...args} />;

export const Default = Template.bind({});
export const Radius = Template.bind({});

Default.args = {
  panelStyle: 'default',
};

Radius.args = {
  panelStyle: 'radius',
};
