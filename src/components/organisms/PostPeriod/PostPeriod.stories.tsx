import type { Meta, StoryObj } from '@storybook/react';

import PostPeriod from './PostPeriod';

const meta: Meta<typeof PostPeriod> = {
  title: 'components/organisms/PostPeriod',
  component: PostPeriod,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof PostPeriod>;

export const Primary: Story = {
  args: {},
};
