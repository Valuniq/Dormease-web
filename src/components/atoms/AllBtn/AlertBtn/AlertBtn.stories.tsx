import type { Meta, StoryObj } from '@storybook/react';

import AlertBtn from './AlertBtn';

const meta: Meta<typeof AlertBtn> = {
  title: 'components/atoms/AllBtn/AlertBtn',
  component: AlertBtn,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof AlertBtn>;

export const Primary: Story = {
  args: {
    hoverColor: 'blue',
    label: '확인',
  },
};

export const Cancel: Story = {
  args: {
    hoverColor: 'gray',
    label: '취소',
  },
};
