import type { Meta, StoryObj } from '@storybook/react';

import AddBuildingPrompt from './AddBuildingPrompt';
import BuildingImgEx from '@public/images/BuildingImgEx2.png';

const meta: Meta<typeof AddBuildingPrompt> = {
  title: 'components/organisms/Prompt/AddBuildingPrompt',
  component: AddBuildingPrompt,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof AddBuildingPrompt>;

export const Primary: Story = {
  args: {
    input: '',
  },
};

export const SelectImage: Story = {
  args: {
    input: '명덕관',
    selectImage: BuildingImgEx,
  },
};
