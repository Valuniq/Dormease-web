import type { Meta, StoryObj } from '@storybook/react';
import BuildingImgEx from '@public/images/BuildingImgEx2.png';

import page from './page';

const meta: Meta<typeof page> = {
  title: 'app/dorms/settings/page',
  component: page,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof page>;

export const Primary: Story = {
  args: {
    list: [
      { buildingId: 1, buildingName: '건물명', image: BuildingImgEx },
      { buildingId: 1, buildingName: '건물명', image: BuildingImgEx },
      { buildingId: 1, buildingName: '건물명', image: BuildingImgEx },
      { buildingId: 1, buildingName: '건물명', image: BuildingImgEx },
      { buildingId: 1, buildingName: '건물명', image: BuildingImgEx },
      { buildingId: 1, buildingName: '건물명', image: BuildingImgEx },
      { buildingId: 1, buildingName: '건물명', image: BuildingImgEx },
      { buildingId: 1, buildingName: '건물명', image: BuildingImgEx },
    ],
  },
};
