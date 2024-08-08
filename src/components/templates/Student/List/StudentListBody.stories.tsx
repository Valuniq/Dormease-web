import type { Meta, StoryObj } from '@storybook/react';

import StudentListBody from './StudentListBody';

const meta: Meta<typeof StudentListBody> = {
  title: 'components/templates/Student/StudentListBody',
  component: StudentListBody,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof StudentListBody>;

export const Primary: Story = {
  args: {
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
};
