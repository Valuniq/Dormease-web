import type { Meta, StoryObj } from '@storybook/react';

import PenaltyHistoryList from './PenaltyHistoryListBody';

const meta: Meta<typeof PenaltyHistoryList> = {
  title: 'components/organisms/Prompt/PenaltyHistoryPrompt/PenaltyHistoryListBody',
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
    score: 1,
    division: 'BONUS',
  },
};

export const Minus: Story = {
  args: {
    date: '2020-12-12',
    reason: '근로 학생',
    score: 1,
    division: 'MINUS',
  },
};
