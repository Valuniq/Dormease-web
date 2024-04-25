import type { Meta, StoryObj } from '@storybook/react';

import DistanceScore from './DistanceScore';

const meta: Meta<typeof DistanceScore> = {
  title: 'components/organisms/StandardSetting/DistanceScore',
  component: DistanceScore,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof DistanceScore>;

export const Primary: Story = {
  args: {},
};
