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
    disabled: false,
    selected: false,
  },
};

export const GreenBtn: Story = {
  args: {
    label: 'caption',
    variant: 'green',
    disabled: false,
    selected: false,
  },
};

export const RedBtn: Story = {
  args: {
    label: 'caption',
    variant: 'red',
    disabled: false,
    selected: false,
  },
};
