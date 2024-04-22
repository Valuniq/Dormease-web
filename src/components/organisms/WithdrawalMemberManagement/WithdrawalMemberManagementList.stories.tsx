import type { Meta, StoryObj } from '@storybook/react';

import WithdrawalMemberManagementList from './WithdrawalMemberManagementList';

const meta: Meta<typeof WithdrawalMemberManagementList> = {
  title: 'components/organisms/WithdrawalMemberManagement/WithdrawalMemberManagementList',
  component: WithdrawalMemberManagementList,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof WithdrawalMemberManagementList>;

export const Primary: Story = {
  args: {
    list: [
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
    ],
  },
};
