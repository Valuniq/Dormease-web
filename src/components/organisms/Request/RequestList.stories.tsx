import type { Meta, StoryObj } from '@storybook/react';

import RequestList from './RequestList';

const meta: Meta<typeof RequestList> = {
  title: 'components/organisms/Request/RequestList',
  component: RequestList,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof RequestList>;

export const Primary: Story = {
  args: {
    list: [
      {
        requestmentId: 999,
        title: '3동 3층 남자 화장실 왼쪽에서 2번째 칸 문이 안 열려요',
        writer: '김김김',
        createdDate: '24.02.30',
        progression: 'IN_REVIEW',
      },
      {
        requestmentId: 999,
        title: '화장실 변기가 막혀서 불편합니다',
        writer: '김김김김',
        createdDate: '24.02.30',
        progression: 'IN_REVIEW',
      },
      {
        requestmentId: 999,
        title: '3동 3층 남자 화장실 왼쪽에서 2번째 칸 문이 안 열려요',
        writer: '김김김김',
        createdDate: '24.02.30',
        progression: 'IN_REVIEW',
      },
      {
        requestmentId: 999,
        title: '화장실 변기가 막혀서 불편합니다',
        writer: '김김김김',
        createdDate: '24.02.30',
        progression: 'IN_REVIEW',
      },
    ],
  },
};
