import type { Meta, StoryObj } from '@storybook/react';

import ResignListBody from './ResignListBody';

const meta: Meta<typeof ResignListBody> = {
  title: 'components/templates/Resign/ResignListBody',
  component: ResignListBody,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof ResignListBody>;

export const Primary: Story = {
  // args: {
  //   exitRequestmentId: 1,
  //   residentName: '김김김김',
  //   studentNumber: '99999999',
  //   dormitoryName: '명덕관(4인실)',
  //   roomSize: 0,
  //   roomNumber: 999,
  //   exitDate: '24.00.00',
  //   hasKey: true,
  //   createDate: '24.00.00',
  //   securityDepositReturnStatus: 'PAYMENT',
  // },
};
