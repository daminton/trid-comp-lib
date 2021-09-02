import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Panel } from './Panel';

const meta: Meta = {
  title: 'Panel',
  component: Panel,
  argTypes: {
    panelStyle: {
      control: 'select',
      options: ['pnl--default', 'pnl--radius', 'pnl--small'],
    },
  },
};

export default meta;

const Template: Story = (args) => <Panel panelStyle {...args} />;

export const Default = Template.bind({});
export const Radius = Template.bind({});
export const Small = Template.bind({});

Default.args = {
  panelStyle: 'pnl--default',
};

Radius.args = {
  panelStyle: 'pnl--radius',
};

Small.args = {
  panelStyle: 'pnl--small',
};
