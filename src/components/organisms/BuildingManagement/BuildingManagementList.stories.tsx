import type { Meta, StoryObj } from '@storybook/react';

import BuildingManagementList from './BuildingManagementList';

const meta: Meta<typeof BuildingManagementList> = {
  title: 'components/organisms/BuildingManagement/BuildingManagementList',
  component: BuildingManagementList,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
// 임시로 빈 스토리를 추가
export const Default = () => <div />;
// type Story = StoryObj<typeof BuildingManagementList>;
// 빌드 타입 에러 주석 처리

// export const Primary: Story = {
//   args: {
// listClick: 3,
// selectStudents: ['6024000', '60220000'],
// list: [
//   {
//     roomId: 1,
//     roomNumber: 101,
//     roomSize: 4,
//     gender: '남',
//     currentPeople: 1,
//   },
//   {
//     roomId: 2,
//     roomNumber: 101,
//     roomSize: 4,
//     gender: '남',
//     currentPeople: 1,
//   },
//   {
//     roomId: 3,
//     roomNumber: 101,
//     roomSize: 4,
//     gender: '남',
//     currentPeople: 1,
//   },
//   {
//     roomId: 4,
//     roomNumber: 101,
//     roomSize: 4,
//     gender: '남',
//     currentPeople: 1,
//   },
// ],
// studentList: [
//   {
//     schoolNumber: '6024000',
//     name: '김도미',
//     phoneNumber: '010-0000-0000',
//   },
//   {
//     schoolNumber: '60240000',
//     name: '김도미',
//     phoneNumber: '010-0000-0000',
//   },
//   {
//     schoolNumber: '60220000',
//     name: '김도미',
//     phoneNumber: '010-0000-0000',
//   },
//   {
//     schoolNumber: '60240000',
//     name: '김도미',
//     phoneNumber: '010-0000-0000',
//   },
// ],
//   },
// };
