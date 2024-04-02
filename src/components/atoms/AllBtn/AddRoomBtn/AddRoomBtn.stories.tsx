import type { Meta, StoryObj } from '@storybook/react';

import AddRoomBtn from './AddRoomBtn';

const meta: Meta<typeof AddRoomBtn> = {
  title: 'components/atoms/AllBtn/AddRoomBtn',
  component: AddRoomBtn,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof AddRoomBtn>;

export const Primary: Story = {
  args: {},
};
