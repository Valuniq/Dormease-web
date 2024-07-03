import type { Meta, StoryObj } from '@storybook/react';

import RoomBtn from './RoomBtn';

const meta: Meta<typeof RoomBtn> = {
  title: 'components/atoms/AllBtn/RoomBtn',
  component: RoomBtn,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof RoomBtn>;

export const Primary: Story = {
  args: {
    selected: false,
  },
};

export const Selected: Story = {
  args: {
    selected: true,
  },
};
