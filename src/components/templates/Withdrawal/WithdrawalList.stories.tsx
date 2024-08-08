import type { Meta, StoryObj } from '@storybook/react';

import WithdrawalsList from './WithdrawalList';

const meta: Meta<typeof WithdrawalsList> = {
  title: 'components/templates/Withdrawal/WithdrawalList',
  component: WithdrawalsList,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

// 임시로 빈 스토리를 추가
export const Default = () => <div />;

// type Story = StoryObj<typeof WithdrawalsList>;

// 빌드 에러 주석 처리

// export const Primary: Story = {
//   args: {
//     list: [
//       {
//         index: 999,
//         name: '김김김김',
//         schoolNumber: '99999998',
//         bonusPoint: 9,
//         minusPoint: 9,
//         date: '2024.02.30',
//       },
//       {
//         index: 999,
//         name: '김김김김',
//         schoolNumber: '99999998',
//         bonusPoint: 9,
//         minusPoint: 9,
//         date: '2024.02.30',
//       },
//       {
//         index: 999,
//         name: '김김김김',
//         schoolNumber: '99999998',
//         bonusPoint: 9,
//         minusPoint: 9,
//         date: '2024.02.30',
//       },
//       {
//         index: 999,
//         name: '김김김김',
//         schoolNumber: '99999998',
//         bonusPoint: 9,
//         minusPoint: 9,
//         date: '2024.02.30',
//       },
//       {
//         index: 999,
//         name: '김김김김',
//         schoolNumber: '99999998',
//         bonusPoint: 9,
//         minusPoint: 9,
//         date: '2024.02.30',
//       },
//       {
//         index: 999,
//         name: '김김김김',
//         schoolNumber: '99999998',
//         bonusPoint: 9,
//         minusPoint: 9,
//         date: '2024.02.30',
//       },
//       {
//         index: 999,
//         name: '김김김김',
//         schoolNumber: '99999998',
//         bonusPoint: 9,
//         minusPoint: 9,
//         date: '2024.02.30',
//       },
//       {
//         index: 999,
//         name: '김김김김',
//         schoolNumber: '99999998',
//         bonusPoint: 9,
//         minusPoint: 9,
//         date: '2024.02.30',
//       },
//       {
//         index: 999,
//         name: '김김김김',
//         schoolNumber: '99999998',
//         bonusPoint: 9,
//         minusPoint: 9,
//         date: '2024.02.30',
//       },
//       {
//         index: 999,
//         name: '김김김김',
//         schoolNumber: '99999998',
//         bonusPoint: 9,
//         minusPoint: 9,
//         date: '2024.02.30',
//       },
//       {
//         index: 999,
//         name: '김김김김',
//         schoolNumber: '99999998',
//         bonusPoint: 9,
//         minusPoint: 9,
//         date: '2024.02.30',
//       },
//       {
//         index: 999,
//         name: '김김김김',
//         schoolNumber: '99999998',
//         bonusPoint: 9,
//         minusPoint: 9,
//         date: '2024.02.30',
//       },
//       {
//         index: 999,
//         name: '김김김김',
//         schoolNumber: '99999998',
//         bonusPoint: 9,
//         minusPoint: 9,
//         date: '2024.02.30',
//       },
//       {
//         index: 999,
//         name: '김김김김',
//         schoolNumber: '99999998',
//         bonusPoint: 9,
//         minusPoint: 9,
//         date: '2024.02.30',
//       },
//     ],
//   },
// };
