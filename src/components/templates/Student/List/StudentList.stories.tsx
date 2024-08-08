import type { Meta, StoryObj } from '@storybook/react';

import StudentList from './StudentList';

const meta: Meta<typeof StudentList> = {
  title: 'components/templates/Student/StudentList',
  component: StudentList,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof StudentList>;

export const Primary: Story = {
  args: {
    genderDown: true,
    buildingDown: true,
    bonusPointDown: true,
    minusPointDown: true,
    list: [
      {
        id: 999,
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
        id: 999,
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
        id: 999,
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
        id: 999,
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
