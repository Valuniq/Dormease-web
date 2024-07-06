import type { Meta, StoryObj } from '@storybook/react';

import ResignationList from './ResignationList';

const meta: Meta<typeof ResignationList> = {
  title: 'components/organisms/Resignation/ResignationList',
  component: ResignationList,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof ResignationList>;

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
