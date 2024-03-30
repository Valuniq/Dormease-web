import type { Meta, StoryObj } from '@storybook/react';

import SelectBuildingDropdown from './SelectBuildingDropdown';

const meta: Meta<typeof SelectBuildingDropdown> = {
  title: 'components/atoms/Dropdown/SelectBuildingDropdown',
  component: SelectBuildingDropdown,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof SelectBuildingDropdown>;

export const IsOn: Story = {
  args: {
    label: '명덕관(4인실)',
    isOn: true,
    list: ['명덕관(4인실)', '명덕관(2인실)', '명덕관(3인실)', '명덕관(1인실)', '명덕관(6인실)'],
  },
};

export const IsOff: Story = {
  args: {
    label: '명덕관(4인실)',
    isOn: false,
    list: ['명덕관(4인실)', '명덕관(2인실)', '명덕관(3인실)', '명덕관(1인실)', '명덕관(6인실)'],
  },
};
