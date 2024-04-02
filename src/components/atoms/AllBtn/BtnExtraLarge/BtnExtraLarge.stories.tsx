import type { Meta, StoryObj } from '@storybook/react';

import BtnExtraLarge from './BtnExtraLarge';

const meta: Meta<typeof BtnExtraLarge> = {
  title: 'components/atoms/AllBtn/BtnExtraLarge',
  component: BtnExtraLarge,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof BtnExtraLarge>;

export const Primary: Story = {
  args: {
    label: 'Inputtext_caption',
    disabled: false,
    selected: false,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Inputtext_caption',
    disabled: true,
    selected: false,
  },
};

export const Selected: Story = {
  args: {
    label: 'Inputtext_caption',
    disabled: false,
    selected: true,
  },
};
