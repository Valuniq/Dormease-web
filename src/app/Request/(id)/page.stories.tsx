import type { Meta, StoryObj } from '@storybook/react';

import page from './page';

const meta: Meta<typeof page> = {
  title: 'app/Request/(id)/page',
  component: page,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof page>;

export const Primary: Story = {
  args: {
    title: '4동 세탁기 수리 요청',
    name: '김김김김',
    date: '24.00.00',
    content: '4동에 거주하는 학생입니다. 왼쪽에서 세번째 세탁기 고장으로 사용이 어려우니 수리 부탁드립니다.',
    isVisited: true,
    isPublic: false,
    progression: '검토중',
  },
};
