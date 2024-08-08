import type { Meta, StoryObj } from '@storybook/react';

import page from './page';

const meta: Meta<typeof page> = {
  title: 'app/students/details/page',
  component: page,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof page>;

export const Primary: Story = {
  args: {
    name: '김김김김',
    schoolNumber: '60240000',
    major: '산업디자인과',
    grade: 4,
    schoolStatus: '재학',
    gender: '남성',
    phoneNumber: '010-9999-9999',
    address: '서울특별시 서울도 서울구 서울로 서울특별시 서울도 서울구 서울로',
    certifiedFile: null,
    prioritySelection: null,
    foodCount: 50,
    isSmoking: true,
    dormitoryPayment: true,
    hasKey: false,
    bounsPoint: 9,
    minusPoint: 9,
    personalInfoConsent: true,
    thirdPartyConsent: true,
    bankName: '농협은행',
    accountNumber: '9999-99-999999',
    emergencyContact: '010-9999-9999',
    emergencyRelation: '부',

    building: '명덕관(4인실)',
    roomNumber: '999',
    bedNumber: '4',
    period: '6개월',
    isRoommateApplied: true,
    roommateInformation: '김김김김 이이이이 박박박박',

    isEdit: false,
  },
};

export const Edit: Story = {
  args: {
    name: '김김김김',
    schoolNumber: '60240000',
    major: '산업디자인과',
    grade: 4,
    schoolStatus: '재학',
    gender: '남성',
    phoneNumber: '010-9999-9999',
    address: '서울특별시 서울도 서울구 서울로 서울특별시 서울도 서울구 서울로',
    certifiedFile: null,
    prioritySelection: null,
    foodCount: 50,
    isSmoking: true,
    dormitoryPayment: true,
    hasKey: false,
    bounsPoint: 9,
    minusPoint: 9,
    personalInfoConsent: true,
    thirdPartyConsent: true,
    bankName: '농협은행',
    accountNumber: '9999-99-999999',
    emergencyContact: '010-9999-9999',
    emergencyRelation: '부',

    building: '명덕관(4인실)',
    roomNumber: '999',
    bedNumber: '4',
    period: '6개월',
    isRoommateApplied: true,
    roommateInformation: '김김김김 이이이이 박박박박',

    isEdit: true,
    isBuilding: false,
  },
};

export const EditRelocation: Story = {
  args: {
    name: '김김김김',
    schoolNumber: '60240000',
    major: '산업디자인과',
    grade: 4,
    schoolStatus: '재학',
    gender: '남성',
    phoneNumber: '010-9999-9999',
    address: '서울특별시 서울도 서울구 서울로 서울특별시 서울도 서울구 서울로',
    certifiedFile: null,
    prioritySelection: null,
    foodCount: 50,
    isSmoking: true,
    dormitoryPayment: true,
    hasKey: false,
    bounsPoint: 9,
    minusPoint: 9,
    personalInfoConsent: true,
    thirdPartyConsent: true,
    bankName: '농협은행',
    accountNumber: '9999-99-999999',
    emergencyContact: '010-9999-9999',
    emergencyRelation: '부',

    building: '명덕관(4인실)',
    roomNumber: '999',
    bedNumber: '4',
    period: '6개월',
    isRoommateApplied: true,
    roommateInformation: '김김김김 이이이이 박박박박',

    isEdit: true,
    isBuilding: true,
  },
};
