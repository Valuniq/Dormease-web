import type { Meta, StoryObj } from '@storybook/react';

import page from './page';

const meta: Meta<typeof page> = {
  title: 'app/Refund/page',
  component: page,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof page>;

export const Primary: Story = {
  args: {
    clickSchoolNumber: '99999998',
    pageNum: 1,
    pageTotalNum: 3,
    list: [
      {
        name: '김김김김',
        schoolNumber: '99999998',
        phoneNumber: '010-9999-9999',
        bankName: '농협',
        accountNumber: '9999-99-999999',
        period: '6개월',
        exitDate: '24.00.00',
        applicationDate: '24.00.00',
        building: '명덕관(4인실)',
        room: '999호',
        bedNumber: '0번',
      },
      {
        name: '김김김김',
        schoolNumber: '99999999',
        phoneNumber: '010-9999-9999',
        bankName: '농협',
        accountNumber: '9999-99-999999',
        period: '6개월',
        exitDate: '24.00.00',
        applicationDate: '24.00.00',
        building: '명덕관(4인실)',
        room: '999호',
        bedNumber: '0번',
      },
      {
        name: '김김김김',
        schoolNumber: '99999999',
        phoneNumber: '010-9999-9999',
        bankName: '농협',
        accountNumber: '9999-99-999999',
        period: '6개월',
        exitDate: '24.00.00',
        applicationDate: '24.00.00',
        building: '명덕관(4인실)',
        room: '999호',
        bedNumber: '0번',
      },
      {
        name: '김김김김',
        schoolNumber: '99999999',
        phoneNumber: '010-9999-9999',
        bankName: '농협',
        accountNumber: '9999-99-999999',
        period: '6개월',
        exitDate: '24.00.00',
        applicationDate: '24.00.00',
        building: '명덕관(4인실)',
        room: '999호',
        bedNumber: '0번',
      },
      {
        name: '김김김김',
        schoolNumber: '99999999',
        phoneNumber: '010-9999-9999',
        bankName: '농협',
        accountNumber: '9999-99-999999',
        period: '6개월',
        exitDate: '24.00.00',
        applicationDate: '24.00.00',
        building: '명덕관(4인실)',
        room: '999호',
        bedNumber: '0번',
      },
    ],
  },
};
