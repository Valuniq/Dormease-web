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
    name: '김김김김',
    schoolNumber: '99999999',
    building: '명덕관(4인실)',
    roomNumber: '999호',
    exitDate: '24.00.00',
    hasKey: true,
    submissionDate: '24.00.00',
    depositRefund: false,
    isChecked: true,
  },
};
