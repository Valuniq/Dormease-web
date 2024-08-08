import type { Meta, StoryObj } from '@storybook/react';

import SettingList from './SettingList';

const meta: Meta<typeof SettingList> = {
  title: 'components/templates/Setting/SettingList',
  component: SettingList,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof SettingList>;

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
