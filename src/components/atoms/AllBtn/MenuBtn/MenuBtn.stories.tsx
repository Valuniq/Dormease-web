import type { Meta, StoryObj } from '@storybook/react';
import MenuIcon from '../../../../../public/images/MenuIconEx.png';

import MenuBtn from './MenuBtn';

const meta: Meta<typeof MenuBtn> = {
  title: 'components/atoms/AllBtn/MenuBtn',
  component: MenuBtn,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof MenuBtn>;

export const Primary: Story = {
  args: {
    label: 'caption',
    menu: MenuIcon,
  },
};
