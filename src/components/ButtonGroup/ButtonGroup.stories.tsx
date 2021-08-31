import { Meta, Story } from '@storybook/react';
import React from 'react';
import { ButtonGroup } from './ButtonGroup';
import { Button } from '../button/Button';

const meta: Meta = {
  title: 'ButtonGroup',
  component: ButtonGroup,
};

export default meta;

const Template: Story = (args) => <ButtonGroup buttons={[]} {...args} />;

export const Default = Template.bind({});

Default.args = {
  buttons: [
    <Button
      buttonName="sample"
      buttonSize="btn--large"
      buttonStyle="btn--dark"
      onClick={() => {}}
    />,
    <Button
      buttonName="sample"
      buttonSize="btn--large"
      buttonStyle="btn--dark"
      onClick={() => {}}
    />,
  ],
};
