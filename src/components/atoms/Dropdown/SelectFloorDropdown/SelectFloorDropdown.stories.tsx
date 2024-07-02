import type { Meta, StoryObj } from '@storybook/react';

import SelectFloorDropdown from './SelectFloorDropdown';

const meta: Meta<typeof SelectFloorDropdown> = {
  title: 'components/atoms/Dropdown/SelectFloorDropdown',
  component: SelectFloorDropdown,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
// 임시로 빈 스토리를 추가
export const Default = () => <div />;
// type Story = StoryObj<typeof SelectFloorDropdown>;
// 빌드 타입 에러 주석 처리

// export const IsOn: Story = {
//   args: {},
// };

// export const IsOff: Story = {
//   args: {
//     isOn: false,
//     select: '2층',
//     list: ['1층', '2층', '3층', '4층', '5층', '6층', '7층', '8층', '9층', '10층'],
//   },
// };
