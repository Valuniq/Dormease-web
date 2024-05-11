import type { Meta, StoryObj } from '@storybook/react';

import page from './page';

const meta: Meta<typeof page> = {
  title: 'app/Request/page',
  component: page,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof page>;

const list = [
  {
    index: 999,
    title:
      '3동 3동에 거주하는 학생입니다. 왼쪽에서 세번째 세탁기 고장으로 사용이 어려우니 수리 부탁드립니다.층 남자 화장실 왼쪽에서 2번째 칸 문이 안 열려요',
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
];

export const Primary: Story = {
  args: {
    list: list,
  },
};
