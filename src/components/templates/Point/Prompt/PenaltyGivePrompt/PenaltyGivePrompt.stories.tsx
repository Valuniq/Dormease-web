import type { Meta, StoryObj } from '@storybook/react';
import { RecoilRoot } from 'recoil';

import PenaltyGivePrompt from './PenaltyGivePrompt';

const meta: Meta<typeof PenaltyGivePrompt> = {
  title: 'components/organisms/Prompt/PenaltyGivePrompt/PenaltyGivePrompt',
  component: PenaltyGivePrompt,
  tags: ['autodocs'],
  argTypes: {},
  decorators: [
    (Story) => (
      <RecoilRoot>
        <Story />
      </RecoilRoot>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof PenaltyGivePrompt>;

export const Primary: Story = {};

export const OnConfirmDisabled: Story = {
  args: {
    bonusTextBoxes: [
      { label: '착하다', score: '10' },
      { label: '귀엽다', score: '20' },
    ],
    minusTextBoxes: [
      { label: '가출', score: '10' },
      { label: '못됐다', score: '20' },
    ],
    onConfirmDisabled: true,
  },
};
