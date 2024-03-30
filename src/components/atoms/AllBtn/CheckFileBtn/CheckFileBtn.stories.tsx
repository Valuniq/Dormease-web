import type { Meta, StoryObj } from '@storybook/react';

import CheckFileBtn from './CheckFileBtn';

const meta: Meta<typeof CheckFileBtn> = {
  title: 'components/atoms/AllBtn/CheckFileBtn',
  component: CheckFileBtn,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof CheckFileBtn>;

export const Primary: Story = {
  args: {
    label: '파일보기',
  },
};
