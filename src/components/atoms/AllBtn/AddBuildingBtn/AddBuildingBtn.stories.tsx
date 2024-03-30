import type { Meta, StoryObj } from '@storybook/react';

import AddBuildingBtn from './AddBuildingBtn';

const meta: Meta<typeof AddBuildingBtn> = {
  title: 'components/atoms/AllBtn/AddBuildingBtn',
  component: AddBuildingBtn,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof AddBuildingBtn>;

export const Primary: Story = {
  args: {},
};
