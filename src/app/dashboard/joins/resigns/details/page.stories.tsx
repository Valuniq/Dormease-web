import type { Meta, StoryObj } from '@storybook/react';

import page from './page';

const meta: Meta<typeof page> = {
  title: 'app/joins/resigns/details/page',
  component: page,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof page>;

export const Primary: Story = {
  args: {
    exitRequestmentId: 0,
    residentName: '김김김김',
    major: '산업디자인과',
    studentNumber: '60240000',
    schoolYear: 4,
    phoneNumber: '010-9999-9999',
    dormitoryName: '명덕관(4인실)',
    roomSize: 0,
    securityDepositReturnStatus: 'PAYMENT',
    roomNumber: 0,
    bedNumber: 0,
    hasKey: false,
    keyNumber: 'ABCDEFGHI',
    exitDate: '24.00.00',
    bankName: '농협은행',
    accountNumber: '9999-99-999999',
  },
};
