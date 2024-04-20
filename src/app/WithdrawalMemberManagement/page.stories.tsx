import type { Meta, StoryObj } from '@storybook/react';

import page from './page';

const meta: Meta<typeof page> = {
  title: 'app/WithdrawalMemberManagement/page',
  component: page,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof page>;

const list = [
  {
    index: 999,
    name: '김김김김',
    schoolNumber: '99999998',
    bonusPoint: 9,
    minusPoint: 9,
    date: '2024.02.30',
  },
  {
    index: 999,
    name: '김김김김',
    schoolNumber: '99999998',
    bonusPoint: 9,
    minusPoint: 9,
    date: '2024.02.30',
  },
  {
    index: 999,
    name: '김김김김',
    schoolNumber: '99999999',
    bonusPoint: 9,
    minusPoint: 9,
    date: '2024.02.30',
  },
  {
    index: 999,
    name: '김김김김',
    schoolNumber: '99999999',
    bonusPoint: 9,
    minusPoint: 9,
    date: '2024.02.30',
  },
];

const listScroll = [
  {
    index: 999,
    name: '김김김김',
    schoolNumber: '99999998',
    bonusPoint: 9,
    minusPoint: 9,
    date: '2024.02.30',
  },
  {
    index: 999,
    name: '김김김김',
    schoolNumber: '99999999',
    bonusPoint: 9,
    minusPoint: 9,
    date: '2024.02.30',
  },
  {
    index: 999,
    name: '김김김김',
    schoolNumber: '99999999',
    bonusPoint: 9,
    minusPoint: 9,
    date: '2024.02.30',
  },
  {
    index: 999,
    name: '김김김김',
    schoolNumber: '99999999',
    bonusPoint: 9,
    minusPoint: 9,
    date: '2024.02.30',
  },
  {
    index: 999,
    name: '김김김김',
    schoolNumber: '99999999',
    bonusPoint: 9,
    minusPoint: 9,
    date: '2024.02.30',
  },
  {
    index: 999,
    name: '김김김김',
    schoolNumber: '99999999',
    bonusPoint: 9,
    minusPoint: 9,
    date: '2024.02.30',
  },
  {
    index: 999,
    name: '김김김김',
    schoolNumber: '99999999',
    bonusPoint: 9,
    minusPoint: 9,
    date: '2024.02.30',
  },
  {
    index: 999,
    name: '김김김김',
    schoolNumber: '99999999',
    bonusPoint: 9,
    minusPoint: 9,
    date: '2024.02.30',
  },
  {
    index: 999,
    name: '김김김김',
    schoolNumber: '99999999',
    bonusPoint: 9,
    minusPoint: 9,
    date: '2024.02.30',
  },
  {
    index: 999,
    name: '김김김김',
    schoolNumber: '99999999',
    bonusPoint: 9,
    minusPoint: 9,
    date: '2024.02.30',
  },
  {
    index: 999,
    name: '김김김김',
    schoolNumber: '99999999',
    bonusPoint: 9,
    minusPoint: 9,
    date: '2024.02.30',
  },
  {
    index: 999,
    name: '김김김김',
    schoolNumber: '99999999',
    bonusPoint: 9,
    minusPoint: 9,
    date: '2024.02.30',
  },
  {
    index: 999,
    name: '김김김김',
    schoolNumber: '99999999',
    bonusPoint: 9,
    minusPoint: 9,
    date: '2024.02.30',
  },
  {
    index: 999,
    name: '김김김김',
    schoolNumber: '99999999',
    bonusPoint: 9,
    minusPoint: 9,
    date: '2024.02.30',
  },
  {
    index: 999,
    name: '김김김김',
    schoolNumber: '99999999',
    bonusPoint: 9,
    minusPoint: 9,
    date: '2024.02.30',
  },
  {
    index: 999,
    name: '김김김김',
    schoolNumber: '99999999',
    bonusPoint: 9,
    minusPoint: 9,
    date: '2024.02.30',
  },
  {
    index: 999,
    name: '김김김김',
    schoolNumber: '99999999',
    bonusPoint: 9,
    minusPoint: 9,
    date: '2024.02.30',
  },
  {
    index: 999,
    name: '김김김김',
    schoolNumber: '99999999',
    bonusPoint: 9,
    minusPoint: 9,
    date: '2024.02.30',
  },
];

export const Primary: Story = {
  args: {
    list: list,
  },
};

export const Scroll: Story = {
  args: {
    list: listScroll,
  },
};

export const NoneList: Story = {
  args: {
    list: [],
  },
};
