import type { Meta, StoryObj } from '@storybook/react';

import page from './page';

const meta: Meta<typeof page> = {
  title: 'app/Resignation/(id)/page',
  component: page,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof page>;

export const Primary: Story = {
  args: {},
};

// export const Primary: Story = {
//   args: {
//     name: '김김김김',
//     major: '산업디자인과',
//     schoolNumber: '60240000',
//     grade: 4,
//     phoneNumber: '010-9999-9999',
//     building: '명덕관(4인실)',
//     depositRefund: true,
//     roomNumber: '999호',
//     bedNumber: '4번',
//     hasKey: false,
//     keyNumber: 'ABCDEFGHI',
//     exitDate: '24.00.00',
//     bankName: '농협은행',
//     accountNumber: '9999-99-999999',
//   },
// };
