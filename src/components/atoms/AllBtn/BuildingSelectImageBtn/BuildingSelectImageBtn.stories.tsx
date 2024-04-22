import type { Meta, StoryObj } from '@storybook/react';

import BuildingSelectImageBtn from './BuildingSelectImageBtn';
import BuildingImgEx from '@public/images/BuildingImgEx.png';

const meta: Meta<typeof BuildingSelectImageBtn> = {
  title: 'components/atoms/AllBtn/BuildingSelectImageBtn',
  component: BuildingSelectImageBtn,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof BuildingSelectImageBtn>;

export const Primary: Story = {
  args: {
    image: BuildingImgEx,
  },
};
