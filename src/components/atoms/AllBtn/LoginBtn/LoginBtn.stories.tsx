import type { Meta, StoryObj } from '@storybook/react';

import LoginBtn from './LoginBtn';

const meta: Meta<typeof LoginBtn> = {
  title: 'components/atoms/AllBtn/LoginBtn',
  component: LoginBtn,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof LoginBtn>;

export const Primary: Story = {
  args: {
    label: '로그인',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    label: '로그인',
    disabled: true,
  },
};
