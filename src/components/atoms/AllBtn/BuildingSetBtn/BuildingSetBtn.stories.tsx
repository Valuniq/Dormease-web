import type { Meta, StoryObj } from '@storybook/react';

import BuildingSetBtn from './BuildingSetBtn';

const meta: Meta<typeof BuildingSetBtn> = {
  title: 'components/atoms/AllBtn/BuildingSetBtn',
  component: BuildingSetBtn,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof BuildingSetBtn>;

export const Primary: Story = {
  args: {
    label: 'caption',
    detail: false,
    selected: false,
  },
};

export const Detail: Story = {
  args: {
    label: 'caption',
    detail: true,
    selected: false,
  },
};
