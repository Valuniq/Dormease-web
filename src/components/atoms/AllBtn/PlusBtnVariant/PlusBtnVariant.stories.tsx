import type { Meta, StoryObj } from '@storybook/react';

import PlusBtnVariant from './PlusBtnVariant';

const meta: Meta<typeof PlusBtnVariant> = {
  title: 'components/atoms/AllBtn/PlusBtnVariant',
  component: PlusBtnVariant,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof PlusBtnVariant>;

export const BlueBtn: Story = {
  args: {
    label: 'caption',
    variant: 'blue',
    disabled: false,
  },
};

export const GreenBtn: Story = {
  args: {
    label: 'caption',
    variant: 'green',
    disabled: false,
  },
};

export const RedBtn: Story = {
  args: {
    label: 'caption',
    variant: 'red',
    disabled: false,
  },
};
