import type { Meta, StoryObj } from '@storybook/react';
import BuildingImgEx from '@public/images/BuildingImgEx2.png';

import page from './page';

const meta: Meta<typeof page> = {
  title: 'app/BuildingSettings/(id)/page',
  component: page,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof page>;

export const Primary: Story = {
  args: {
    listClick: 2,
    image: BuildingImgEx,
    selectFilter: 1,
    completedFilter: [1, 2],
    list: [
      {
        roomId: 1,
        roomNumber: 101,
        roomSize: 4,
        gender: 'MALE',
        hasKey: true,
        isChecked: true,
      },
      {
        roomId: 1,
        roomNumber: 101,
        roomSize: 4,
        gender: 'MALE',
        hasKey: true,
        isChecked: true,
      },
      {
        roomId: 1,
        roomNumber: 101,
        roomSize: 4,
        gender: 'MALE',
        hasKey: true,
        isChecked: true,
      },
      {
        roomId: 1,
        roomNumber: 101,
        roomSize: 4,
        gender: 'MALE',
        hasKey: true,
        isChecked: true,
      },
      {
        roomId: 1,
        roomNumber: 101,
        roomSize: 4,
        gender: 'MALE',
        hasKey: true,
        isChecked: true,
      },
      {
        roomId: 1,
        roomNumber: 101,
        roomSize: 4,
        gender: 'MALE',
        hasKey: true,
        isChecked: true,
      },
      {
        roomId: 1,
        roomNumber: 101,
        roomSize: 4,
        gender: 'MALE',
        hasKey: true,
        isChecked: true,
      },
      {
        roomId: 1,
        roomNumber: 101,
        roomSize: 4,
        gender: 'MALE',
        hasKey: true,
        isChecked: true,
      },
      {
        roomId: 1,
        roomNumber: 101,
        roomSize: 4,
        gender: 'MALE',
        hasKey: true,
        isChecked: true,
      },
      {
        roomId: 1,
        roomNumber: 101,
        roomSize: 4,
        gender: 'MALE',
        hasKey: true,
        isChecked: true,
      },
      {
        roomId: 1,
        roomNumber: 101,
        roomSize: 4,
        gender: 'MALE',
        hasKey: true,
        isChecked: true,
      },
      {
        roomId: 1,
        roomNumber: 101,
        roomSize: 4,
        gender: 'MALE',
        hasKey: true,
        isChecked: true,
      },
      {
        roomId: 1,
        roomNumber: 101,
        roomSize: 4,
        gender: 'MALE',
        hasKey: true,
        isChecked: true,
      },
      {
        roomId: 1,
        roomNumber: 101,
        roomSize: 4,
        gender: 'MALE',
        hasKey: true,
        isChecked: true,
      },
      {
        roomId: 1,
        roomNumber: 101,
        roomSize: 4,
        gender: 'MALE',
        hasKey: true,
        isChecked: true,
      },
      {
        roomId: 1,
        roomNumber: 101,
        roomSize: 4,
        gender: 'MALE',
        hasKey: true,
        isChecked: true,
      },
      {
        roomId: 1,
        roomNumber: 101,
        roomSize: 4,
        gender: 'MALE',
        hasKey: true,
        isChecked: true,
      },
      {
        roomId: 1,
        roomNumber: 101,
        roomSize: 4,
        gender: 'MALE',
        hasKey: true,
        isChecked: true,
      },
    ],
    building: '명덕관',
    floor: 1,
    roomCountStart: 1,
    roomCountEnd: 60,
  },
};

export const NoneList: Story = {
  args: {
    listClick: 2,
    image: undefined,
    list: [],
    building: '명덕관',
    floor: 1,
    roomCountStart: 1,
    roomCountEnd: 60,
  },
};
