import type { Meta, StoryObj } from '@storybook/react';

import RequestListBody from './RequestListBody';

const meta: Meta<typeof RequestListBody> = {
  title: 'components/organisms/Request/RequestListBody',
  component: RequestListBody,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof RequestListBody>;

export const Primary: Story = {
  args: {
    index: 999,
    title: '3동 3층 남자 화장실 왼쪽에서 2번째 칸 문이 안 열려요',
    name: '김김김김',
    date: '24.02.30',
    progression: '검토중',
  },
};
