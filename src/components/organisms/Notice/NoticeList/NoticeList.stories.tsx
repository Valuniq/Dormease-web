import type { Meta, StoryObj } from '@storybook/react';

import NoticeList from './NoticeList';

const meta: Meta<typeof NoticeList> = {
  title: 'components/organisms/NoticeList/NoticeList',
  component: NoticeList,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof NoticeList>;

export const Primary: Story = {
  args: {
    noticeLists: [
      {
        index: '1',
        title: '2024-1 전자식권 사용방법 안내(식당/편의점/카페)',
        writer: '이보현',
        registrationDate: '2020.20.20',
        isExistedFile: true,
        views: 999,
        isPinned: true,
      },
      {
        index: '1',
        title: '2024-1 전자식권 사용방법 안내(식당/편의점/카페)',
        writer: '이보현',
        registrationDate: '2020.20.20',
        isExistedFile: true,
        views: 999,
        isPinned: false,
      },
      {
        index: '1',
        title: '2024-1 전자식권 사용방법 안내(식당/편의점/카페)',
        writer: '이보현',
        registrationDate: '2020.20.20',
        isExistedFile: true,
        views: 999,
        isPinned: true,
      },
      {
        index: '1',
        title: '2024-1학기 추가입사 등록자 확인(등록자 확인(24.02',
        writer: '이보현',
        registrationDate: '2020.20.20',
        isExistedFile: true,
        views: 999,
        isPinned: true,
      },
    ],
  },
};

export const scroll: Story = {
  args: {
    noticeLists: [
      {
        index: '1',
        title: '2024-1 전자식권 사용방법 안내(식당/편의점/카페)',
        writer: '이보현',
        registrationDate: '2020.20.20',
        isExistedFile: true,
        views: 999,
        isPinned: false,
      },
      {
        index: '1',
        title: '2024-1 전자식권 사용방법 안내(식당/편의점/카페)',
        writer: '이보현',
        registrationDate: '2020.20.20',
        isExistedFile: true,
        views: 999,
        isPinned: true,
      },
      {
        index: '1',
        title: '2024-1 전자식권 사용방법 안내(식당/편의점/카페)',
        writer: '이보현',
        registrationDate: '2020.20.20',
        isExistedFile: true,
        views: 999,
        isPinned: false,
      },
      {
        index: '1',
        title: '2024-1 전자식권 사용방법 안내(식당/편의점/카페)',
        writer: '이보현',
        registrationDate: '2020.20.20',
        isExistedFile: true,
        views: 999,
        isPinned: false,
      },
      {
        index: '1',
        title: '2024-1 전자식권 사용방법 안내(식당/편의점/카페)',
        writer: '이보현',
        registrationDate: '2020.20.20',
        isExistedFile: true,
        views: 999,
        isPinned: false,
      },
      {
        index: '1',
        title: '2024-1 전자식권 사용방법 안내(식당/편의점/카페)',
        writer: '이보현',
        registrationDate: '2020.20.20',
        isExistedFile: true,
        views: 999,
        isPinned: false,
      },
      {
        index: '1',
        title: '2024-1 전자식권 사용방법 안내(식당/편의점/카페)',
        writer: '이보현',
        registrationDate: '2020.20.20',
        isExistedFile: true,
        views: 999,
        isPinned: false,
      },
      {
        index: '1',
        title: '2024-1 전자식권 사용방법 안내(식당/편의점/카페)',
        writer: '이보현',
        registrationDate: '2020.20.20',
        isExistedFile: true,
        views: 999,
        isPinned: false,
      },
      {
        index: '1',
        title: '2024-1 전자식권 사용방법 안내(식당/편의점/카페)',
        writer: '이보현',
        registrationDate: '2020.20.20',
        isExistedFile: true,
        views: 999,
        isPinned: false,
      },
      {
        index: '1',
        title: '2024-1 전자식권 사용방법 안내(식당/편의점/카페)',
        writer: '이보현',
        registrationDate: '2020.20.20',
        isExistedFile: true,
        views: 999,
        isPinned: true,
      },
      {
        index: '1',
        title: '2024-1 전자식권 사용방법 안내(식당/편의점/카페)',
        writer: '이보현',
        registrationDate: '2020.20.20',
        isExistedFile: true,
        views: 999,
        isPinned: false,
      },
      {
        index: '1',
        title: '2024-1 전자식권 사용방법 안내(식당/편의점/카페)',
        writer: '이보현',
        registrationDate: '2020.20.20',
        isExistedFile: true,
        views: 999,
        isPinned: false,
      },
      {
        index: '1',
        title: '2024-1 전자식권 사용방법 안내(식당/편의점/카페)',
        writer: '이보현',
        registrationDate: '2020.20.20',
        isExistedFile: true,
        views: 999,
        isPinned: false,
      },
      {
        index: '1',
        title: '2024-1 전자식권 사용방법 안내(식당/편의점/카페)',
        writer: '이보현',
        registrationDate: '2020.20.20',
        isExistedFile: true,
        views: 999,
        isPinned: false,
      },
    ],
  },
};

export const noData: Story = {
  args: {
    noticeLists: [],
  },
};
