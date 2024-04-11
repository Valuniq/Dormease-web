import type { Meta, StoryObj } from '@storybook/react';

import StudentMangement from './StudentMangement';

const meta: Meta<typeof StudentMangement> = {
  title: 'components/templates/StudentMangement/StudentMangement',
  component: StudentMangement,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof StudentMangement>;

export const Primary: Story = {
  args: {
    genderDown: true,
    buildingDown: true,
    bonusPointDown: true,
    minusPointDown: true,
    studentClick: '99999998',
    list: [
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
        schoolNumber: '99999998',
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
