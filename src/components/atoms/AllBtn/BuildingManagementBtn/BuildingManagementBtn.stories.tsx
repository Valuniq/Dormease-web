import type { Meta, StoryObj } from '@storybook/react';

import BuildingManagementBtn from './BuildingManagementBtn';

const meta: Meta<typeof BuildingManagementBtn> = {
  title: 'components/atoms/AllBtn/BuildingManagementBtn',
  component: BuildingManagementBtn,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof BuildingManagementBtn>;

export const Primary: Story = {
  args: {
    selected: false,
  },
};

export const Selected: Story = {
  args: {
    selected: true,
  },
};
