import type { Meta, StoryObj } from '@storybook/react';

import AddPeriodBtn from './AddPeriodBtn';

const meta: Meta<typeof AddPeriodBtn> = {
  title: 'components/atoms/AllBtn/AddPeriodBtn',
  component: AddPeriodBtn,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof AddPeriodBtn>;

export const Primary: Story = {
  args: {},
};
