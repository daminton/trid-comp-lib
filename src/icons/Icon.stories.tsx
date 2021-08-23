import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Icon } from './Icon';
import { SearchIcon } from './SearchIcon';
import { CaretIcon } from './CaretIcon';
import { CompleteIcon } from './CompleteIcon';

const meta: Meta = {
  title: 'Icon',
  component: Icon,
};

export default meta;

const Template: Story = (args) => <Icon variant={[]} {...args} />;

export const Search = Template.bind({});
export const Caret = Template.bind({});
export const Complete = Template.bind({});

Search.args = {
  variant: <SearchIcon />,
};

Caret.args = {
  variant: <CaretIcon />,
};

Complete.args = {
  variant: <CompleteIcon />,
};
