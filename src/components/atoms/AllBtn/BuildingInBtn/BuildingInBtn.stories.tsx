import type { Meta, StoryObj } from '@storybook/react';

import BuildingInBtn from './BuildingInBtn';

const meta: Meta<typeof BuildingInBtn> = {
  title: 'components/atoms/AllBtn/BuildingInBtn',
  component: BuildingInBtn,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof BuildingInBtn>;

export const Primary: Story = {
  args: {
    label: 'Caption_btn',
  },
};
