import type { Meta, StoryObj } from '@storybook/react';

import BtnMidVariant from './BtnMidVariant';

const meta: Meta<typeof BtnMidVariant> = {
  title: 'components/atoms/AllBtn/BtnMidVariant',
  component: BtnMidVariant,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof BtnMidVariant>;

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

export const GrayBtn: Story = {
  args: {
    label: 'caption',
    variant: 'gray',
  },
};

export const WhiteBlueBtn: Story = {
  args: {
    label: 'caption',
    variant: 'whiteblue',
  },
};
