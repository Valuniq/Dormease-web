import type { Meta, StoryObj } from '@storybook/react';

import FloorBtn from './FloorBtn';

const meta: Meta<typeof FloorBtn> = {
  title: 'components/atoms/AllBtn/FloorBtn',
  component: FloorBtn,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof FloorBtn>;

export const Primary: Story = {
  args: {
    label: '1층',
    disabled: false,
    selected: false,
  },
};

export const Disabled: Story = {
  args: {
    label: '1층',
    disabled: true,
    selected: false,
  },
};

export const Selected: Story = {
  args: {
    label: '1층',
    disabled: true,
    selected: true,
  },
};
