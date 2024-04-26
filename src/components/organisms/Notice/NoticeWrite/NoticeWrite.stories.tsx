import type { Meta, StoryObj } from '@storybook/react';

import NoticeWrite from './NoticeWrite';

const meta: Meta<typeof NoticeWrite> = {
  title: 'components/organisms/NoticeWrite/NoticeWrite',
  component: NoticeWrite,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof NoticeWrite>;

export const Primary: Story = {
  args: {},
};
