import type { Meta, StoryObj } from '@storybook/react';

import PromptOutBtn from './PromptOutBtn';

const meta: Meta<typeof PromptOutBtn> = {
  title: 'components/atoms/AllBtn/PromptOutBtn',
  component: PromptOutBtn,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof PromptOutBtn>;

export const Primary: Story = {
  args: {},
};
