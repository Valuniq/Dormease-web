import type { Meta, StoryObj } from '@storybook/react';

import Pagination from './Pagination';

const meta: Meta<typeof Pagination> = {
  title: 'components/atoms/AllBtn/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Pagination>;

export const Primary: Story = {
  args: {
    pageNum: 2,
    pageTotalNum: 3,
  },
};
