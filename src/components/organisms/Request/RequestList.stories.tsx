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
        index: 999,
        title: '3동 3층 남자 화장실 왼쪽에서 2번째 칸 문이 안 열려요',
        name: '김김김',
        date: '24.02.30',
        progression: '검토중',
      },
      {
        index: 999,
        title: '화장실 변기가 막혀서 불편합니다',
        name: '김김김김',
        date: '24.02.30',
        progression: '진행중',
      },
      {
        index: 999,
        title: '3동 3층 남자 화장실 왼쪽에서 2번째 칸 문이 안 열려요',
        name: '김김김김',
        date: '24.02.30',
        progression: '검토중',
      },
      {
        index: 999,
        title: '화장실 변기가 막혀서 불편합니다',
        name: '김김김김',
        date: '24.02.30',
        progression: '진행중',
      },
    ],
  },
};
