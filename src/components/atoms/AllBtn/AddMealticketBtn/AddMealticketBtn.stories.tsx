import type { Meta, StoryObj } from '@storybook/react';

import AddMealticketBtn from './AddMealticketBtn';

const meta: Meta<typeof AddMealticketBtn> = {
  title: 'components/atoms/AllBtn/AddMealticketBtn',
  component: AddMealticketBtn,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof AddMealticketBtn>;

export const Primary: Story = {
  args: {},
};
