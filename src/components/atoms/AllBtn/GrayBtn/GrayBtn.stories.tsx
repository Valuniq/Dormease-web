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
    selected: false,
  },
};

export const Disabled: Story = {
  args: {
    label: 'caption',
    disabled: true,
    selected: false,
  },
};

export const Selected: Story = {
  args: {
    label: 'caption',
    disabled: false,
    selected: true,
  },
};
