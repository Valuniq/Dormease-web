import type { Meta, StoryObj } from '@storybook/react';

import RelocationDropdown from './RelocationDropdown';

const meta: Meta<typeof RelocationDropdown> = {
  title: 'components/atoms/Dropdown/RelocationDropdown',
  component: RelocationDropdown,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof RelocationDropdown>;

export const Primary: Story = {
  args: {
    // list: ['명덕관(4인실)', '명덕관(2인실)', '명덕관(3인실)', '명덕관(1인실)'],
  },
};

export const Selected: Story = {
  args: {
    // list: ['명덕관(4인실)', '명덕관(2인실)', '명덕관(3인실)', '명덕관(1인실)'],
    // select: '명덕관(4인실)',
  },
};
