import type { Meta, StoryObj } from '@storybook/react';

import UpDown from './UpDown';

const meta: Meta<typeof UpDown> = {
  title: 'components/atoms/AllBtn/UpDown',
  component: UpDown,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof UpDown>;

export const Primary: Story = {
  args: {},
};
