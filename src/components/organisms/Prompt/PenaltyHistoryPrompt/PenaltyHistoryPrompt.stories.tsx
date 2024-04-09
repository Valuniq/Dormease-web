import type { Meta, StoryObj } from '@storybook/react';

import PenaltyHistoryPrompt from './PenaltyHistoryPrompt';

const meta: Meta<typeof PenaltyHistoryPrompt> = {
  title: 'components/organisms/Prompt/PenaltyHistoryPrompt',
  component: PenaltyHistoryPrompt,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof PenaltyHistoryPrompt>;

export const Primary: Story = {
  args: {
    penaltyLists: [
      {
        date: '2022-12-21',
        reason: '하아아아',
        score: '21',
        division: 'minus',
        isChecked: true,
        setIsChecked: () => {},
      },
      {
        date: '2022-12-21',
        reason: '하아아아',
        score: '21',
        division: 'minus',
        isChecked: true,
        setIsChecked: () => {},
      },
      {
        date: '2022-12-21',
        reason: '하아아아',
        score: '21',
        division: 'minus',
        isChecked: true,
        setIsChecked: () => {},
      },
      {
        date: '2022-12-21',
        reason: '하아아아',
        score: '21',
        division: 'minus',
        isChecked: true,
        setIsChecked: () => {},
      },
      {
        date: '2022-12-21',
        reason: '하아아아',
        score: '21',
        division: 'minus',
        isChecked: true,
        setIsChecked: () => {},
      },
    ],
    plusSum: 292,
    minusSum: 233,
  },
};
