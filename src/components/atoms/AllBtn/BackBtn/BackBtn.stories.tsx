import type { Meta, StoryObj } from '@storybook/react';

import BackBtn from './BackBtn';

const meta: Meta<typeof BackBtn> = {
  title: 'components/atoms/AllBtn/BackBtn',
  component: BackBtn,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof BackBtn>;

export const Primary: Story = {
  args: {
    label: '이전 내역',
    disabled: false,
    selected: false,
  },
};

export const Disabled: Story = {
  args: {
    label: '이전 내역',
    disabled: true,
    selected: false,
  },
};

export const Selected: Story = {
  args: {
    label: '이전 내역',
    disabled: false,
    selected: true,
  },
};
