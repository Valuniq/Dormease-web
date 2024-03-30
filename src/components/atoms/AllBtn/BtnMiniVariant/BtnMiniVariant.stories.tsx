import type { Meta, StoryObj } from '@storybook/react';

import BtnMiniVariant from './BtnMiniVariant';

const meta: Meta<typeof BtnMiniVariant> = {
  title: 'components/atoms/AllBtn/BtnMiniVariant',
  component: BtnMiniVariant,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof BtnMiniVariant>;

export const BlueBtn: Story = {
  args: {
    label: 'caption',
    variant: 'blue',
  },
};

export const RedBtn: Story = {
  args: {
    label: 'caption',
    variant: 'red',
  },
};
