import type { Meta, StoryObj } from '@storybook/react';

import page from './page';

const meta: Meta<typeof page> = {
  title: 'app/PointManagement/page',
  component: page,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof page>;

export const Primary: Story = {
  args: {
    pointManagementLists: [
      {
        index: '1',
        name: 'John Doe',
        studentId: '123456',
        phoneNumber: '123-456-7890',
        plus: '10',
        minus: '5',
        building: 'Main',
        room: '101',
        isChecked: false,
        setIsChecked: () => {},
      },
      {
        index: '2',
        name: 'Jane Smith',
        studentId: '654321',
        phoneNumber: '987-654-3210',
        plus: '8',
        minus: '3',
        building: 'Main',
        room: '102',
        isChecked: false,
        setIsChecked: () => {},
      },
      // Add more dummy data as needed
    ],
    isAllChecked: false,
    setIsAllChecked: () => {},
    plusSort: false,
    setPlusSort: () => {},
    minusSort: false,
    setMinusSort: () => {},
  },
};
