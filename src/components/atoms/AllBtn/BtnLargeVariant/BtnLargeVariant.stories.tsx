import type { Meta, StoryObj } from '@storybook/react';

import BtnLargeVariant from './BtnLargeVariant';

const meta: Meta<typeof BtnLargeVariant> = {
  title: 'components/atoms/AllBtn/BtnLargeVariant',
  component: BtnLargeVariant,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof BtnLargeVariant>;

export const BlueBtn: Story = {
  args: {
    label: 'caption',
    variant: 'blue',
  },
};

export const GreenBtn: Story = {
  args: {
    label: 'caption',
    variant: 'green',
  },
};

export const RedBtn: Story = {
  args: {
    label: 'caption',
    variant: 'red',
  },
};
