import type { Meta, StoryObj } from '@storybook/react';

import WithdrawalsListBody from './WithdrawalListBody';

const meta: Meta<typeof WithdrawalsListBody> = {
  title: 'components/templates/Withdrawal/WithdrawalListBody',
  component: WithdrawalsListBody,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
// 임시로 빈 스토리를 추가
export const Default = () => <div />;
// type Story = StoryObj<typeof WithdrawalMemberManagementListBody>;

// 빌드 에러 주석 처리

// export const Primary: Story = {
//   args: {
//     index: 999,
//     name: '김김김김',
//     schoolNumber: '99999998',
//     bonusPoint: 9,
//     minusPoint: 9,
//     date: '2024.02.30',
//   },
// };
