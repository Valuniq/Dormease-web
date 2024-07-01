import type { Meta, StoryObj } from '@storybook/react';

import PromptHeader from './PromptHeader';

const meta: Meta<typeof PromptHeader> = {
  title: 'components/atoms/Prompt/PromptHeader',
  component: PromptHeader,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof PromptHeader>;

export const Primary: Story = {
  args: {},
};
