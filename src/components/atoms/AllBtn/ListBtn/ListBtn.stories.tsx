import type { Meta, StoryObj } from '@storybook/react';

import ListBtn from './ListBtn';

const meta: Meta<typeof ListBtn> = {
  title: 'components/atoms/AllBtn/ListBtn',
  component: ListBtn,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof ListBtn>;

export const Primary: Story = {
  args: {
    width: 1186,
  },
};
