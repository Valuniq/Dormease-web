import type { Meta, StoryObj } from '@storybook/react';

import page from './page';

const meta: Meta<typeof page> = {
  title: 'app/Resignation/page',
  component: page,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof page>;

const list = [
  {
    name: '김김김김',
    schoolNumber: '99999998',
    building: '명덕관(4인실)',
    roomNumber: '999호',
    exitDate: '24.00.00',
    hasKey: false,
    submissionDate: '24.00.00',
    depositRefund: true,
    isChecked: true,
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
];

const listScroll = [
  {
    name: '김김김김',
    schoolNumber: '99999998',
    building: '명덕관(4인실)',
    roomNumber: '999호',
    exitDate: '24.00.00',
    hasKey: false,
    submissionDate: '24.00.00',
    depositRefund: true,
    isChecked: true,
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
];

export const Primary: Story = {
  args: {
    clickSchoolNumber: '99999998',
    list: list,
  },
};

export const Scroll: Story = {
  args: {
    clickSchoolNumber: '99999998',
    list: listScroll,
  },
};

export const NoneList: Story = {
  args: {
    list: [],
  },
};
