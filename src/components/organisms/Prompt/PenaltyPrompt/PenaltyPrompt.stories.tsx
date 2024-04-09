import type { Meta, StoryObj } from '@storybook/react';

import PenaltyPrompt from './PenaltyPrompt';

const meta: Meta<typeof PenaltyPrompt> = {
  title: 'components/organisms/Prompt/PenaltyPrompt',
  component: PenaltyPrompt,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof PenaltyPrompt>;

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

export const onConfirmDisabled: Story = {
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
