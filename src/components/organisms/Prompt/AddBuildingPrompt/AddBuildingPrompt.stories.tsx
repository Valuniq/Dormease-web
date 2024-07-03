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
// 임시로 빈 스토리를 추가
export const Default = () => <div />;
// type Story = StoryObj<typeof AddBuildingPrompt>;

// export const Primary: Story = {
//   args: {
//     input: '',
//   },
// };

// 빌드 에러 주석 처리

// export const SelectImage: Story = {
//   args: {
//     input: '명덕관',
//     selectImage: BuildingImgEx,
//   },
// };
