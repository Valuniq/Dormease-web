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
    label: '검토중',
  },
};

export const IsOff: Story = {
  args: { isOn: false, label: '검토중' },
};
