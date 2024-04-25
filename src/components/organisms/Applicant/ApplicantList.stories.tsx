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

export const primary: Story = {
  args: {
    applicantLists: [],
  },
};

export const scroll: Story = {
  args: {
    applicantLists: [
      {
        name: '이보현',
        studentId: '6091241',
        gender: '여성',
        applicationBuilding: '명덕관(1인실)',
        residence: '서울특별시 송파구 송파대서울특별시 송파구 송파서울특별시 송파구 송파로 48길 2',
        certifiedFile: null,
        prioritySelection: null,
        assignedBuilding: null,
        isPassed: 'pass',
        isChecked: false,
        setIsChecked: () => {},
      },
      {
        name: '이보현',
        studentId: '6091241',
        gender: '여성',
        applicationBuilding: '명덕관(1인실)',
        residence: '서울특별시 송파구 송파대서울특별시 송파구 송파서울특별시 송파구 송파로 48길 2',
        certifiedFile: null,
        prioritySelection: null,
        assignedBuilding: null,
        isPassed: 'pass',
        isChecked: false,
        setIsChecked: () => {},
      },
      {
        name: '이보현',
        studentId: '6091241',
        gender: '여성',
        applicationBuilding: '명덕관(1인실)',
        residence: '서울특별시 송파구 송파대서울특별시 송파구 송파서울특별시 송파구 송파로 48길 2',
        certifiedFile: null,
        prioritySelection: null,
        assignedBuilding: null,
        isPassed: 'movingPass',
        isChecked: false,
        setIsChecked: () => {},
      },
      {
        name: '이보현',
        studentId: '6091241',
        gender: '여성',
        applicationBuilding: '명덕관(1인실)',
        residence: '서울특별시 송파구 송파대서울특별시 송파구 송파서울특별시 송파구 송파로 48길 2',
        certifiedFile: null,
        prioritySelection: null,
        assignedBuilding: null,
        isPassed: 'out',
        isChecked: false,
        setIsChecked: () => {},
      },
      {
        name: '이보현',
        studentId: '6091241',
        gender: '여성',
        applicationBuilding: '명덕관(1인실)',
        residence: '서울특별시 송파구 송파대서울특별시 송파구 송파서울특별시 송파구 송파로 48길 2',
        certifiedFile: null,
        prioritySelection: null,
        assignedBuilding: null,
        isPassed: 'pass',
        isChecked: false,
        setIsChecked: () => {},
      },
    ],
  },
};

export const noData: Story = {
  args: {
    applicantLists: [],
  },
};
