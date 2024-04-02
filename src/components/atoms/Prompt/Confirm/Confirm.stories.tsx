import type { Meta, StoryObj } from '@storybook/react';

import Confirm from './Confirm';

const meta: Meta<typeof Confirm> = {
  title: 'components/atoms/Prompt/Confirm/Confirm',
  component: Confirm,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Confirm>;

export const Blue_Confirm: Story = {
  args: {
    color: 'blue',
    description: '설명을 입력하세요.',
  },
};

export const Red_Confirm: Story = {
  args: {
    color: 'red',
    description: '설명을 입력하세요.',
  },
};

export const green_Confirm: Story = {
  args: {
    color: 'green',
    description: '설명을 입력하세요.',
  },
};
