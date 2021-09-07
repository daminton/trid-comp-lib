import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Icon } from './Icon';
import { SearchIcon } from './SearchIcon';
import { CaretIcon } from './CaretIcon';
import { CompleteIcon } from './CompleteIcon';
import { ArrowIcon } from './ArrowIcon';
import { DashboardIcon } from './DashboardIcon';
import { SuccessIcon } from './SuccessIcon';
import { ActorsIcon } from './ActorsIcon';
import { EventDetailsIcon } from './EventDetailsIcon';
import { InfoIcon } from './InfoIcon';
import { OverviewIcon } from './OverviewIcon';
import { OrchestrateLogoIcon } from './OrchestrateLogoIcon';

const meta: Meta = {
  title: 'Icons',
  component: Icon,
};

export default meta;

const Template: Story = (args) => <Icon variant={[]} {...args} />;

export const Search = Template.bind({});
export const Caret = Template.bind({});
export const Complete = Template.bind({});
export const Arrow = Template.bind({});
export const Dashboard = Template.bind({});
export const Success = Template.bind({});
export const Actors = Template.bind({});
export const EventDetails = Template.bind({});
export const Info = Template.bind({});
export const Overview = Template.bind({});
export const OrchestrateLogo = Template.bind({});

Search.args = {
  variant: <SearchIcon />,
};

Caret.args = {
  variant: <CaretIcon />,
};

Complete.args = {
  variant: <CompleteIcon />,
};

Arrow.args = {
  variant: <ArrowIcon />,
};

Dashboard.args = {
  variant: <DashboardIcon />,
};

Success.args = {
  variant: <SuccessIcon />,
};

Actors.args = {
  variant: <ActorsIcon />,
};

EventDetails.args = {
  variant: <EventDetailsIcon />,
};

Info.args = {
  variant: <InfoIcon />,
};

Overview.args = {
  variant: <OverviewIcon />,
};

OrchestrateLogo.args = {
  variant: <OrchestrateLogoIcon />,
};
