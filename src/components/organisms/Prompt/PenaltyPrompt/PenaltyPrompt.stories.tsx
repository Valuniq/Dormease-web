import type { Meta, StoryObj } from '@storybook/react';

import PenaltyPrompt from './PenaltyPrompt';

const meta: Meta<typeof PenaltyPrompt> = {
  title: 'components/ornganisms/Prompt/PenaltyPrompt',
  component: PenaltyPrompt,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof PenaltyPrompt>;

export const Primary: Story = {
  args: {},
};
