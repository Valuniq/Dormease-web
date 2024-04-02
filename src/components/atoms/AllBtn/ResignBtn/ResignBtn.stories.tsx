import type { Meta, StoryObj } from '@storybook/react';

import ResignBtn from './ResignBtn';

const meta: Meta<typeof ResignBtn> = {
  title: 'components/atoms/AllBtn/ResignBtn',
  component: ResignBtn,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof ResignBtn>;

export const Primary: Story = {
  args: {
    label: '퇴사처리',
  },
};
