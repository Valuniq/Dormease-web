import type { Meta, StoryObj } from '@storybook/react';
import { RecoilRoot } from 'recoil';

import PenaltyManagementPrompt from './PenaltyManagementPrompt';

const meta: Meta<typeof PenaltyManagementPrompt> = {
  title: 'components/organisms/Prompt/PenaltyManagementPrompt/PenaltyManagementPrompt',
  component: PenaltyManagementPrompt,
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

type Story = StoryObj<typeof PenaltyManagementPrompt>;

export const Primary: Story = {
  args: {
    bonusTextBoxes: [
      { label: '착하다', score: '10' },
      { label: '귀엽다', score: '20' },
    ],
    minusTextBoxes: [
      { label: '가출', score: '10' },
      { label: '못됐다', score: '20' },
    ],
    onConfirmDisabled: false,
  },
};

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
