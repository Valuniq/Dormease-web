import type { Meta, StoryObj } from '@storybook/react';

import AppMemberManagementList from './AppMemberManagementList';

const meta: Meta<typeof AppMemberManagementList> = {
  title: 'components/organisms/AppMemberManagementList',
  component: AppMemberManagementList,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof AppMemberManagementList>;

export const Primary: Story = {
  args: {
    appMemberManagementLists: [
      {
        index: '001',
        name: '이보현',
        studentId: '60190814',
        phoneNumber: '010-1234-1234',
        personalAgree: true,
        thirdAgree: false,
        plus: '123',
        minus: '342',
        creationDate: '20.22.12',
      },
      {
        index: '002',
        name: '이보현',
        studentId: '60190814',
        phoneNumber: '010-1234-1234',
        personalAgree: true,
        thirdAgree: false,
        plus: '123',
        minus: '342',
        creationDate: '20.22.12',
      },
      {
        index: '003',
        name: '이보현',
        studentId: '60190814',
        phoneNumber: '010-1234-1234',
        personalAgree: true,
        thirdAgree: false,
        plus: '123',
        minus: '342',
        creationDate: '20.22.12',
      },
      {
        index: '004',
        name: '이보현',
        studentId: '60190814',
        phoneNumber: '010-1234-1234',
        personalAgree: true,
        thirdAgree: false,
        plus: '123',
        minus: '342',
        creationDate: '20.22.12',
      },
      {
        index: '005',
        name: '이보현',
        studentId: '60190814',
        phoneNumber: '010-1234-1234',
        personalAgree: true,
        thirdAgree: false,
        plus: '123',
        minus: '342',
        creationDate: '20.22.12',
      },
    ],
  },
};
