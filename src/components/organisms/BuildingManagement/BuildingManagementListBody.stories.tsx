import type { Meta, StoryObj } from '@storybook/react';

import BuildingManagementListBody from './BuildingManagementListBody';

const meta: Meta<typeof BuildingManagementListBody> = {
  title: 'components/organisms/BuildingManagement/BuildingManagementListBody',
  component: BuildingManagementListBody,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof BuildingManagementListBody>;

// 빌드 에러 주석

export const Primary: Story = {
  args: {
    // roomId: 1,
    // roomNumber: 101,
    // roomSize: 4,
    // gender: '남',
    // currentPeople: 1,
    // selectStudents: [],
    // listClick: 1,
    // list: [
    //   {
    //     schoolNumber: '60240000',
    //     name: '김도미',
    //     phoneNumber: '010-0000-0000',
    //   },
    //   {
    //     schoolNumber: '60240000',
    //     name: '김도미',
    //     phoneNumber: '010-0000-0000',
    //   },
    //   {
    //     schoolNumber: '60240000',
    //     name: '김도미',
    //     phoneNumber: '010-0000-0000',
    //   },
    //   {
    //     schoolNumber: '60240000',
    //     name: '김도미',
    //     phoneNumber: '010-0000-0000',
    //   },
    // ],
  },
};
