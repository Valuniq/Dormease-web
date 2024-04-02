import type { Meta, StoryObj } from '@storybook/react';
import RadioBtn from './RadioBtn';

const meta: Meta<typeof RadioBtn> = {
  title: 'components/atoms/AllBtn/RadioBtn',
  component: RadioBtn,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof RadioBtn>;

export const IsOn: Story = {
  args: {
    isOn: true,
  },
};

export const IsOff: Story = {
  args: { isOn: false },
};
