import type { Meta, StoryObj } from '@storybook/react';

import BuildingSettingsList from './BuildingSettingsList';

const meta: Meta<typeof BuildingSettingsList> = {
  title: 'components/organisms/BuildingSettings/BuildingSettingsList',
  component: BuildingSettingsList,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof BuildingSettingsList>;

export const Primary: Story = {
  args: {
    list: [
      {
        id: 1,
        roomNumber: 101,
        roomSize: 4,
        gender: 'MALE',
        hasKey: true,
        floor: 0,
        isActivated: false,
      },
      {
        id: 1,
        roomNumber: 101,
        roomSize: 4,
        gender: 'MALE',
        hasKey: true,
        floor: 0,
        isActivated: false,
      },
      {
        id: 1,
        roomNumber: 101,
        roomSize: 4,
        gender: 'MALE',
        hasKey: false,
        floor: 0,
        isActivated: false,
      },
      {
        id: 1,
        roomNumber: 101,
        roomSize: 4,
        gender: 'FEMALE',
        hasKey: true,
        floor: 0,
        isActivated: false,
      },
      {
        id: 1,
        roomNumber: 101,
        roomSize: 4,
        gender: 'FEMALE',
        hasKey: true,
        isActivated: false,
        floor: 0,
      },
    ],
  },
};
