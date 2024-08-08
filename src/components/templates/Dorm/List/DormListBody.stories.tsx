import type { Meta, StoryObj } from '@storybook/react';

import DormListBody from './DormListBody';

const meta: Meta<typeof DormListBody> = {
  title: 'components/templates/Dorm/DormListBody',
  component: DormListBody,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof DormListBody>;

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
