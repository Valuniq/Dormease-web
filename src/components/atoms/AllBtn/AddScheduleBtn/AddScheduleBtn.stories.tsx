import type { Meta, StoryObj } from '@storybook/react';

import AddScheduleBtn from './AddScheduleBtn';

const meta: Meta<typeof AddScheduleBtn> = {
  title: 'components/atoms/AllBtn/AddScheduleBtn',
  component: AddScheduleBtn,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof AddScheduleBtn>;

export const Primary: Story = {
  args: {},
};
