import type { Meta, StoryObj } from '@storybook/react';

import WithdrawalMemberManagementListBody from './WithdrawalMemberManagementListBody';

const meta: Meta<typeof WithdrawalMemberManagementListBody> = {
  title: 'components/organisms/WithdrawalMemberManagement/WithdrawalMemberManagementListBody',
  component: WithdrawalMemberManagementListBody,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof WithdrawalMemberManagementListBody>;

export const Primary: Story = {
  args: {
    index: 999,
    name: '김김김김',
    schoolNumber: '99999998',
    bonusPoint: 9,
    minusPoint: 9,
    date: '2024.02.30',
  },
};
