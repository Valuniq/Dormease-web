import type { Meta, StoryObj } from '@storybook/react';
import { RecoilRoot } from 'recoil';
import PenaltyHistoryPrompt from './PenaltyHistoryPrompt';

const meta: Meta<typeof PenaltyHistoryPrompt> = {
  title: 'components/organisms/Prompt/PenaltyHistoryPrompt/PenaltyHistoryPrompt',
  component: PenaltyHistoryPrompt,
  tags: ['autodocs'],
  argTypes: {
    isAllChecked: { control: 'boolean' },
    plusSum: { control: 'number' },
    minusSum: { control: 'number' },
    setIsAllChecked: { action: 'setIsAllChecked' },
  },
  decorators: [
    (Story) => (
      <RecoilRoot>
        <Story />
      </RecoilRoot>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof PenaltyHistoryPrompt>;

export const Primary: Story = {
  args: {
    penaltyLists: [
      {
        userPointId: 0,
        createdAt: '2022-12-21',
        content: '사유 1',
        score: 10,
        pointType: 0,
      },
      {
        userPointId: 1,
        createdAt: '2022-12-22',
        content: '사유 2',
        score: -5,
        pointType: 1,
      },
    ],
    plusSum: 10,
    minusSum: -5,
    isAllChecked: false,
  },
};
