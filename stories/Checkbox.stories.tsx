import { Meta, Story } from '@storybook/react';
import Checkbox from '../src/components/Checkbox/Checkbox';

const meta: Meta = {
  title: 'Checkbox',
  component: Checkbox,
};

export default meta;

const Template: Story = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
export const Disabled = Template.bind({});

Default.args = {
  variant: 'Default',
  label: 'Default ',
};

Disabled.args = {
  variant: 'Disabled',
  label: 'Disabled ',
};
