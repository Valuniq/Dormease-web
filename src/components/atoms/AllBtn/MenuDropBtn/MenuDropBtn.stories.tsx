import type { Meta, StoryObj } from '@storybook/react';
import MenuIcon from '../../../../../public/images/MenuIconEx.png';

import MenuDropBtn from './MenuDropBtn';

const meta: Meta<typeof MenuDropBtn> = {
  title: 'components/atoms/AllBtn/MenuDropBtn',
  component: MenuDropBtn,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof MenuDropBtn>;

export const Primary: Story = {
  args: {
    label: 'caption',
    selected: false,
  },
};

export const Selected: Story = {
  args: {
    label: 'caption',
    selected: true,
  },
};
