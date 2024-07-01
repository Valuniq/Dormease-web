import type { Meta, StoryObj } from '@storybook/react';

import PassMemberList from './PassMemberList';

const meta: Meta<typeof PassMemberList> = {
  title: 'components/organisms/PassMemberList',
  component: PassMemberList,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof PassMemberList>;

export const Primary: Story = {
  args: {
    passMemberLists: [
      {
        degree: 1,
        name: '이보현',
        studentId: '6019012',
        gender: '남',
        isSmoking: false,
        appliedRoommate: '12341234',
        bedNumber: 2,
        room: 301,
        assignment: true,
      },
      {
        degree: 1,
        name: '이보현',
        studentId: '6019012',
        gender: '남',
        isSmoking: false,
        appliedRoommate: '12341234',
        bedNumber: 2,
        room: 301,
        assignment: true,
      },
      {
        degree: 1,
        name: '이보현',
        studentId: '6019012',
        gender: '남',
        isSmoking: false,
        appliedRoommate: '12341234',
        bedNumber: 2,
        room: 301,
        assignment: true,
      },
    ],
  },
};

export const Scroll: Story = {
  args: {
    passMemberLists: [
      {
        degree: 1,
        name: '이보현',
        studentId: '6019012',
        gender: '남',
        isSmoking: false,
        appliedRoommate: '12341234',
        bedNumber: 2,
        room: 301,
        assignment: true,
      },
      {
        degree: 1,
        name: '이보현',
        studentId: '6019012',
        gender: '남',
        isSmoking: false,
        appliedRoommate: '12341234',
        bedNumber: 2,
        room: 301,
        assignment: true,
      },
      {
        degree: 1,
        name: '이보현',
        studentId: '6019012',
        gender: '남',
        isSmoking: false,
        appliedRoommate: '12341234',
        bedNumber: 2,
        room: 301,
        assignment: true,
      },
      {
        degree: 1,
        name: '이보현',
        studentId: '6019012',
        gender: '남',
        isSmoking: false,
        appliedRoommate: '12341234',
        bedNumber: 2,
        room: 301,
        assignment: true,
      },
      {
        degree: 1,
        name: '이보현',
        studentId: '6019012',
        gender: '남',
        isSmoking: false,
        appliedRoommate: '12341234',
        bedNumber: 2,
        room: 301,
        assignment: true,
      },
      {
        degree: 1,
        name: '이보현',
        studentId: '6019012',
        gender: '남',
        isSmoking: false,
        appliedRoommate: '12341234',
        bedNumber: 2,
        room: 301,
        assignment: true,
      },
      {
        degree: 1,
        name: '이보현',
        studentId: '6019012',
        gender: '남',
        isSmoking: false,
        appliedRoommate: '12341234',
        bedNumber: 2,
        room: 301,
        assignment: true,
      },
      {
        degree: 1,
        name: '이보현',
        studentId: '6019012',
        gender: '남',
        isSmoking: false,
        appliedRoommate: '12341234',
        bedNumber: 2,
        room: 301,
        assignment: true,
      },
      {
        degree: 1,
        name: '이보현',
        studentId: '6019012',
        gender: '남',
        isSmoking: false,
        appliedRoommate: '12341234',
        bedNumber: 2,
        room: 301,
        assignment: true,
      },
      {
        degree: 1,
        name: '이보현',
        studentId: '6019012',
        gender: '남',
        isSmoking: false,
        appliedRoommate: '12341234',
        bedNumber: 2,
        room: 301,
        assignment: true,
      },
      {
        degree: 1,
        name: '이보현',
        studentId: '6019012',
        gender: '남',
        isSmoking: false,
        appliedRoommate: '12341234',
        bedNumber: 2,
        room: 301,
        assignment: true,
      },
      {
        degree: 1,
        name: '이보현',
        studentId: '6019012',
        gender: '남',
        isSmoking: false,
        appliedRoommate: '12341234',
        bedNumber: 2,
        room: 301,
        assignment: true,
      },
      {
        degree: 1,
        name: '이보현',
        studentId: '6019012',
        gender: '남',
        isSmoking: false,
        appliedRoommate: '12341234',
        bedNumber: 2,
        room: 301,
        assignment: true,
      },
      {
        degree: 1,
        name: '이보현',
        studentId: '6019012',
        gender: '남',
        isSmoking: false,
        appliedRoommate: '12341234',
        bedNumber: 2,
        room: 301,
        assignment: true,
      },
      {
        degree: 1,
        name: '이보현',
        studentId: '6019012',
        gender: '남',
        isSmoking: false,
        appliedRoommate: '12341234',
        bedNumber: 2,
        room: 301,
        assignment: true,
      },
      {
        degree: 1,
        name: '이보현',
        studentId: '6019012',
        gender: '남',
        isSmoking: false,
        appliedRoommate: '12341234',
        bedNumber: 2,
        room: 301,
        assignment: true,
      },
      {
        degree: 1,
        name: '이보현',
        studentId: '6019012',
        gender: '남',
        isSmoking: false,
        appliedRoommate: '12341234',
        bedNumber: 2,
        room: 301,
        assignment: true,
      },
      {
        degree: 1,
        name: '이보현',
        studentId: '6019012',
        gender: '남',
        isSmoking: false,
        appliedRoommate: '12341234',
        bedNumber: 2,
        room: 301,
        assignment: true,
      },
    ],
  },
};

export const NoData: Story = {
  args: {},
};
