import type { Meta, StoryObj } from '@storybook/react';
import page from './page';

const meta: Meta<typeof page> = {
  title: 'app/students/additions/page',
  component: page,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof page>;

export const Primary: Story = {
  args: {
    name: '',
    schoolNumber: '',
    major: '',
    grade: null,
    schoolStatus: '',
    gender: 'MALE',
    phoneNumber: '',
    address: '',
    certifiedFile: null,
    prioritySelection: null,
    foodCount: null,
    isSmoking: false,
    dormitoryPayment: false,
    hasKey: false,
    bounsPoint: 0,
    minusPoint: 0,
    personalInfoConsent: false,
    thirdPartyConsent: false,
    bankName: '',
    accountNumber: '',
    emergencyContact: '',
    emergencyRelation: '',

    building: '',
    roomNumber: null,
    bedNumber: null,
    period: '',
    isRoommateApplied: false,
    roommateInformation: '',

    isEdit: true,
  },
};
