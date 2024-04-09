import type { Meta, StoryObj } from '@storybook/react';

import ConfirmPrompt from './ConfirmPrompt';

const meta: Meta<typeof ConfirmPrompt> = {
  title: 'components/organisms/Prompt/ConfirmPrompt',
  component: ConfirmPrompt,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof ConfirmPrompt>;

export const Blue_ConfirmPrompt: Story = {
  args: {
    variant: 'blue',
    label: '설명을 입력하세요.',
  },
};

export const Red_ConfirmPrompt: Story = {
  args: {
    variant: 'red',
    label: '설명을 입력하세요.',
  },
};

export const green_ConfirmPrompt: Story = {
  args: {
    variant: 'green',
    label: '설명을 입력하세요.',
  },
};
