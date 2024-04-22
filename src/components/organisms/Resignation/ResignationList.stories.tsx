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
        name: '김김김김',
        schoolNumber: '99999999',
        building: '명덕관(4인실)',
        roomNumber: '999호',
        exitDate: '24.00.00',
        hasKey: true,
        submissionDate: '24.00.00',
        depositRefund: false,
        isChecked: false,
      },
      {
        name: '김김김김',
        schoolNumber: '99999999',
        building: '명덕관(4인실)',
        roomNumber: '999호',
        exitDate: '24.00.00',
        hasKey: true,
        submissionDate: '24.00.00',
        depositRefund: false,
        isChecked: false,
      },
      {
        name: '김김김김',
        schoolNumber: '99999999',
        building: '명덕관(4인실)',
        roomNumber: '999호',
        exitDate: '24.00.00',
        hasKey: true,
        submissionDate: '24.00.00',
        depositRefund: false,
        isChecked: false,
      },
      {
        name: '김김김김',
        schoolNumber: '99999999',
        building: '명덕관(4인실)',
        roomNumber: '999호',
        exitDate: '24.00.00',
        hasKey: true,
        submissionDate: '24.00.00',
        depositRefund: false,
        isChecked: false,
      },
      {
        name: '김김김김',
        schoolNumber: '99999999',
        building: '명덕관(4인실)',
        roomNumber: '999호',
        exitDate: '24.00.00',
        hasKey: true,
        submissionDate: '24.00.00',
        depositRefund: false,
        isChecked: false,
      },
      {
        name: '김김김김',
        schoolNumber: '99999999',
        building: '명덕관(4인실)',
        roomNumber: '999호',
        exitDate: '24.00.00',
        hasKey: true,
        submissionDate: '24.00.00',
        depositRefund: false,
        isChecked: false,
      },
      {
        name: '김김김김',
        schoolNumber: '99999999',
        building: '명덕관(4인실)',
        roomNumber: '999호',
        exitDate: '24.00.00',
        hasKey: true,
        submissionDate: '24.00.00',
        depositRefund: false,
        isChecked: false,
      },
    ],
  },
};
