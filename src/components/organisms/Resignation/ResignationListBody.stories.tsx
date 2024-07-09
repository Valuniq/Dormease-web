import type { Meta, StoryObj } from '@storybook/react';

import ResignationListBody from './ResignationListBody';

const meta: Meta<typeof ResignationListBody> = {
  title: 'components/organisms/Resignation/ResignationListBody',
  component: ResignationListBody,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof ResignationListBody>;

export const Primary: Story = {
  args: {
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
};
