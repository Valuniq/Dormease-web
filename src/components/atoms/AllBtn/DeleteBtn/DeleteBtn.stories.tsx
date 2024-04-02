import type { Meta, StoryObj } from '@storybook/react';

import DeleteBtn from './DeleteBtn';

const meta: Meta<typeof DeleteBtn> = {
  title: 'components/atoms/AllBtn/DeleteBtn',
  component: DeleteBtn,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof DeleteBtn>;

export const Primary: Story = {
  args: {},
};
