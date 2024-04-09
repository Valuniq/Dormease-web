import type { Meta, StoryObj } from '@storybook/react';

import PenaltyHistoryList from './PenaltyHistoryList';

const meta: Meta<typeof PenaltyHistoryList> = {
  title: 'components/atoms/Prompt/PenaltyHistoryList',
  component: PenaltyHistoryList,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof PenaltyHistoryList>;

export const Primary: Story = {
  args: {
    date: '2020-12-12',
    reason: '근로 학생',
    score: '1',
    division: 'plus',
    isChecked: true,
  },
};

export const Minus: Story = {
  args: {
    date: '2020-12-12',
    reason: '근로 학생',
    score: '1',
    division: 'minus',
    isChecked: true,
  },
};
