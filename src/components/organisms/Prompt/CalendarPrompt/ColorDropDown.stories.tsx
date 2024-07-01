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

export const IsOn: Story = {
  args: {
    isOn: true,
  },
};

export const IsOff: Story = {
  args: {
    isOn: false,
  },
};

export const IsSelected: Story = {
  args: {
    isOn: true,
    select: 'red',
  },
};
