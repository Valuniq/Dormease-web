import type { Meta, StoryObj } from '@storybook/react';
import Checkbox from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'components/atoms/AllBtn/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const IsChecked: Story = {
  args: {
    isChecked: true,
  },
};

export const IsNotChecked: Story = {
  args: { isChecked: false },
};
