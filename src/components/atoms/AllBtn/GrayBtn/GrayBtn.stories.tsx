import type { Meta, StoryObj } from '@storybook/react';

import GrayBtn from './GrayBtn';

const meta: Meta<typeof GrayBtn> = {
  title: 'components/atoms/AllBtn/GrayBtn',
  component: GrayBtn,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof GrayBtn>;

export const Primary: Story = {
  args: {
    label: 'caption',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    label: 'caption',
    disabled: true,
  },
};
