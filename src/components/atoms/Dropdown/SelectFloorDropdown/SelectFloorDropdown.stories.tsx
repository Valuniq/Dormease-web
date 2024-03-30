import type { Meta, StoryObj } from '@storybook/react';

import SelectFloorDropdown from './SelectFloorDropdown';

const meta: Meta<typeof SelectFloorDropdown> = {
  title: 'components/atoms/Dropdown/SelectFloorDropdown',
  component: SelectFloorDropdown,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof SelectFloorDropdown>;

export const IsOn: Story = {
  args: {
    label: '층',
    isOn: true,
    list: ['1층', '2층', '3층', '4층', '5층', '6층', '7층', '8층', '9층', '10층'],
  },
};

export const IsOff: Story = {
  args: {
    label: '층',
    isOn: false,
    list: ['1층', '2층', '3층', '4층', '5층', '6층', '7층', '8층', '9층', '10층'],
  },
};
