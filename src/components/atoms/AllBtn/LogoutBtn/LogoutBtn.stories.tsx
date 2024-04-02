import type { Meta, StoryObj } from '@storybook/react';

import LogoutBtn from './LogoutBtn';

const meta: Meta<typeof LogoutBtn> = {
  title: 'components/atoms/AllBtn/LogoutBtn',
  component: LogoutBtn,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof LogoutBtn>;

export const Primary: Story = {
  args: {
    label: '로그아웃',
  },
};
