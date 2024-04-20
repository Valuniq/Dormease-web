import type { Meta, StoryObj } from '@storybook/react';

import page from './page';

const meta: Meta<typeof page> = {
  title: 'app/StudentManagement/page',
  component: page,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof page>;

export const Primary: Story = {
  args: {
    genderDown: true,
    buildingDown: true,
    bonusPointDown: true,
    minusPointDown: true,
    list: [
      {
        index: 999,
        name: '김김김',
        schoolNumber: '99999999',
        gender: '남성',
        building: '명덕관(4인실)',
        room: '999호',
        bonusPoint: 9,
        minusPoint: 9,
        schoolStatus: '재학',
      },
      {
        index: 999,
        name: '김김김김',
        schoolNumber: '99999999',
        gender: '남성',
        building: '명덕관(4인실)',
        room: '999호',
        bonusPoint: 9,
        minusPoint: 9,
        schoolStatus: '재학',
      },
      {
        index: 999,
        name: '김김김김',
        schoolNumber: '99999999',
        gender: '남성',
        building: '명덕관(4인실)',
        room: '999호',
        bonusPoint: 9,
        minusPoint: 9,
        schoolStatus: '재학',
      },
      {
        index: 999,
        name: '김김김김',
        schoolNumber: '99999999',
        gender: '남성',
        building: '명덕관(4인실)',
        room: '999호',
        bonusPoint: 9,
        minusPoint: 9,
        schoolStatus: '재학',
      },
    ],
  },
};
