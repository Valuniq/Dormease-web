import type { Meta, StoryObj } from '@storybook/react';

import RefundListBody from './RefundListBody';

const meta: Meta<typeof RefundListBody> = {
  title: 'components/templates/Refund/RefundListBody',
  component: RefundListBody,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
// 임시로 빈 스토리를 추가
export const Default = () => <div />;
// type Story = StoryObj<typeof RefundListBody>;

// 빌드 에러 주석 처리

// export const Primary: Story = {
//   args: {
//     name: '김김김김',
//     schoolNumber: '99999999',
//     phoneNumber: '010-9999-9999',
//     bankName: '농협',
//     accountNumber: '9999-99-999999',
//     period: '6개월',
//     exitDate: '24.00.00',
//     applicationDate: '24.00.00',
//     building: '명덕관(4인실)',
//     room: '999호',
//     bedNumber: '0번',
//   },
// };
