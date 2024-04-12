import type { Meta, StoryObj } from '@storybook/react';

import PointManagementList from './PointManagementList';

const meta: Meta<typeof PointManagementList> = {
  title: 'components/organisms/PointManagementList',
  component: PointManagementList,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof PointManagementList>;

export const Primary: Story = {
  args: {
    pointManagementLists: [
      {
        index: '001',
        name: '이보현',
        studentId: '60190814',
        phoneNumber: '010-1234-1234',
        plus: '123',
        minus: '342',
        building: '명덕관(1인실)',
        room: '232호',
        isChecked: true,
        setIsChecked: () => {},
      },
      {
        index: '002',
        name: '이보현',
        studentId: '60190814',
        phoneNumber: '010-1234-1234',
        plus: '123',
        minus: '342',
        building: '명덕관(1인실)',
        room: '232호',
        isChecked: true,
        setIsChecked: () => {},
      },
      {
        index: '003',
        name: '이보현',
        studentId: '60190814',
        phoneNumber: '010-1234-1234',
        plus: '123',
        minus: '342',
        building: '명덕관(1인실)',
        room: '232호',
        isChecked: true,
        setIsChecked: () => {},
      },
      {
        index: '004',
        name: '이보현',
        studentId: '60190814',
        phoneNumber: '010-1234-1234',
        plus: '123',
        minus: '342',
        building: '명덕관(1인실)',
        room: '232호',
        isChecked: true,
        setIsChecked: () => {},
      },
      {
        index: '005',
        name: '이보현',
        studentId: '60190814',
        phoneNumber: '010-1234-1234',
        plus: '123',
        minus: '342',
        building: '명덕관(1인실)',
        room: '232호',
        isChecked: true,
        setIsChecked: () => {},
      },
    ],
  },
};
