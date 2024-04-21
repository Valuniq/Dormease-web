import type { Meta, StoryObj } from '@storybook/react';
import BuildingImgEx from '@public/images/BuildingImgEx2.png';
import BuildingSettingsBody from './BuildingSettingsBody';

const meta: Meta<typeof BuildingSettingsBody> = {
  title: 'components/organisms/BuildingSettings/BuildingSettingsBody',
  component: BuildingSettingsBody,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof BuildingSettingsBody>;

export const Primary: Story = {
  args: {
    buildingId: 1,
    buildingName: '건물명',
    image: BuildingImgEx,
  },
};
