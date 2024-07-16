import type { Meta, StoryObj } from '@storybook/react';

import BuildingSettingsListBody from './BuildingSettingsListBody';

const meta: Meta<typeof BuildingSettingsListBody> = {
  title: 'components/organisms/BuildingSettings/BuildingSettingsListBody',
  component: BuildingSettingsListBody,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof BuildingSettingsListBody>;

export const Primary: Story = {
  args: {
    id: 1,
    roomNumber: 101,
    roomSize: 4,
    gender: 'MALE',
    hasKey: true,
  },
};
