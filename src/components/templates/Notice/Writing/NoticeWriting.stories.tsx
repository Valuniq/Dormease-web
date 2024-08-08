import type { Meta, StoryObj } from '@storybook/react';

import NoticeWriting from './NoticeWriting';

const meta: Meta<typeof NoticeWriting> = {
  title: 'components/organisms/NoticeWriting/NoticeWriting',
  component: NoticeWriting,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof NoticeWriting>;

export const Primary: Story = {
  args: {},
};
