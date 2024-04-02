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

export const GrayBtn: Story = {
  args: {
    label: 'caption',
    variant: 'gray',
    disabled: false,
    selected: false,
  },
};

export const WhiteBlueBtn: Story = {
  args: {
    label: 'caption',
    variant: 'whiteblue',
    disabled: false,
    selected: false,
  },
};

export const WhiteBtn: Story = {
  args: {
    label: 'caption',
    variant: 'white',
    disabled: false,
    selected: false,
  },
};
