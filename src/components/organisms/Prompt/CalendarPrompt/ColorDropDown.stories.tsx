import type { Meta, StoryObj } from '@storybook/react';

import ColorDropDown from './ColorDropDown';

const meta: Meta<typeof ColorDropDown> = {
  title: 'components/organisms/Prompt/ColorDropDown',
  component: ColorDropDown,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof ColorDropDown>;

export const isOn: Story = {
  args: {
    isOn: true,
  },
};

export const isOff: Story = {
  args: {
    isOn: false,
  },
};

export const isSelected: Story = {
  args: {
    isOn: true,
    select: 'red',
  },
};
