import type { Meta, StoryObj } from '@storybook/react';

import StudentMangementListBody from './StudentMangementListBody';

const meta: Meta<typeof StudentMangementListBody> = {
  title: 'components/organisms/StudentMangement/StudentMangementListBody',
  component: StudentMangementListBody,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof StudentMangementListBody>;

export const Primary: Story = {
  args: {
    index: 999,
    name: '김김김김',
    schoolNumber: '99999998',
    gender: '남성',
    building: '명덕관(4인실)',
    room: '999호',
    bonusPoint: 9,
    minusPoint: 9,
    schoolStatus: '재학',
    studentClick: '99999998',
  },
};
