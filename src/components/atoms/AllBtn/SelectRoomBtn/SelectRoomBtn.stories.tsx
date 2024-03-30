import type { Meta, StoryObj } from '@storybook/react';

import SelectRoomBtn from './SelectRoomBtn';

const meta: Meta<typeof SelectRoomBtn> = {
  title: 'components/atoms/AllBtn/SelectRoomBtn',
  component: SelectRoomBtn,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof SelectRoomBtn>;

export const Primary: Story = {
  args: {},
};
