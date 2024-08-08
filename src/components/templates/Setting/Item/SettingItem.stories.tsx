import type { Meta, StoryObj } from '@storybook/react';
import BuildingImgEx from '@public/images/BuildingImgEx2.png';
import SettingItem from './SettingItem';

const meta: Meta<typeof SettingItem> = {
  title: 'components/templates/Setting/SettingItem',
  component: SettingItem,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
// 임시로 빈 스토리를 추가
export const Default = () => <div />;
// type Story = StoryObj<typeof SettingItem>;

// 빌드 에러 주석처리

// export const Primary: Story = {
//   args: {
//     buildingId: 1,
//     buildingName: '건물명',
//     image: BuildingImgEx,
//   },
// };
