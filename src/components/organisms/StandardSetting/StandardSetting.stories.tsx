import type { Meta, StoryObj } from '@storybook/react';

import StandardSetting from './StandardSetting';

const meta: Meta<typeof StandardSetting> = {
  title: 'components/organisms/StandardSetting/StandardSetting',
  component: StandardSetting,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof StandardSetting>;

export const Primary: Story = {
  args: {},
};
