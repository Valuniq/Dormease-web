import type { Meta, StoryObj } from '@storybook/react';

import DatePicker from './DatePicker';

const meta: Meta<typeof DatePicker> = {
  title: 'components/organisms/DatePicker/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof DatePicker>;

export const Primary: Story = {
  args: {},
};
