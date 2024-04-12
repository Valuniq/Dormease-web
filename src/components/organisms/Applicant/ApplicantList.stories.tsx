import type { Meta, StoryObj } from '@storybook/react';

import ApplicantList from './ApplicantList';

const meta: Meta<typeof ApplicantList> = {
  title: 'components/organisms/ApplicantList',
  component: ApplicantList,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof ApplicantList>;

export const Primary: Story = {
  args: {
    applicantLists: [
      {
        name: '이보현',
        studentId: '6091241',
        gender: '여성',
        applicationBuilding: '명덕관(1인실)',
        residence: '서울특별시 송파구 송파대서울특별시 송파구 송파서울특별시 송파구 송파로 48길 2',
        certifiedFile: null,
        prioritySelection: false,
        assignedBuilding: null,
        isPassed: null,
        isChecked: false,
        setIsChecked: () => {},
      },
      {
        name: '이보현',
        studentId: '6091241',
        gender: '여성',
        applicationBuilding: '명덕관(1인실)',
        residence: '서울특별시 송파구 송파대로 48길 2',
        certifiedFile: null,
        prioritySelection: false,
        assignedBuilding: null,
        isPassed: null,
        isChecked: false,
        setIsChecked: () => {},
      },
      {
        name: '이보현',
        studentId: '6091241',
        gender: '여성',
        applicationBuilding: '명덕관(1인실)',
        residence: '서울특별시 송파구 송파대로 48길 2',
        certifiedFile: null,
        prioritySelection: false,
        assignedBuilding: null,
        isPassed: null,
        isChecked: false,
        setIsChecked: () => {},
      },
      {
        name: '이보현',
        studentId: '6091241',
        gender: '여성',
        applicationBuilding: '명덕관(1인실)',
        residence: '서울특별시 송파구 송파대로 48길 2',
        certifiedFile: null,
        prioritySelection: false,
        assignedBuilding: null,
        isPassed: null,
        isChecked: false,
        setIsChecked: () => {},
      },
      {
        name: '이보현',
        studentId: '6091241',
        gender: '여성',
        applicationBuilding: '명덕관(1인실)',
        residence: '서울특별시 송파구 송파대로 48길 2',
        certifiedFile: null,
        prioritySelection: true,
        assignedBuilding: null,
        isPassed: null,
        isChecked: false,
        setIsChecked: () => {},
      },
    ],
  },
};