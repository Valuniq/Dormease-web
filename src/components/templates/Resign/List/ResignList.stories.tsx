import type { Meta, StoryObj } from '@storybook/react';

import ResignList from './ResignList';

const meta: Meta<typeof ResignList> = {
  title: 'components/templates/Resign/ResignList',
  component: ResignList,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof ResignList>;

export const Primary: Story = {
  args: {
    list: [
      {
        exitRequestmentId: 1,
        residentName: '김김김김',
        studentNumber: '99999999',
        dormitoryName: '명덕관(4인실)',
        roomSize: 0,
        roomNumber: 999,
        exitDate: '24.00.00',
        hasKey: true,
        createDate: '24.00.00',
        securityDepositReturnStatus: 'PAYMENT',
      },
      {
        exitRequestmentId: 1,
        residentName: '김김김김',
        studentNumber: '99999999',
        dormitoryName: '명덕관(4인실)',
        roomSize: 0,
        roomNumber: 999,
        exitDate: '24.00.00',
        hasKey: true,
        createDate: '24.00.00',
        securityDepositReturnStatus: 'PAYMENT',
      },
      {
        exitRequestmentId: 1,
        residentName: '김김김김',
        studentNumber: '99999999',
        dormitoryName: '명덕관(4인실)',
        roomSize: 0,
        roomNumber: 999,
        exitDate: '24.00.00',
        hasKey: true,
        createDate: '24.00.00',
        securityDepositReturnStatus: 'PAYMENT',
      },
      {
        exitRequestmentId: 1,
        residentName: '김김김김',
        studentNumber: '99999999',
        dormitoryName: '명덕관(4인실)',
        roomSize: 0,
        roomNumber: 999,
        exitDate: '24.00.00',
        hasKey: true,
        createDate: '24.00.00',
        securityDepositReturnStatus: 'PAYMENT',
      },
    ],
  },
};
