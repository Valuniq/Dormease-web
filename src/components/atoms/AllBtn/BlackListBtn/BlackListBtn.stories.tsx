import type { Meta, StoryObj } from '@storybook/react';

import BlackListBtn from './BlackListBtn';

const meta: Meta<typeof BlackListBtn> = {
  title: 'components/atoms/AllBtn/BlackListBtn',
  component: BlackListBtn,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof BlackListBtn>;

export const Primary: Story = {
  args: {
    label: '블랙리스트',
  },
};
