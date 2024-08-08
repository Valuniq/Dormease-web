import type { Meta, StoryObj } from '@storybook/react';

import SettingListBody from './SettingListBody';

const meta: Meta<typeof SettingListBody> = {
  title: 'components/templates/Setting/SettingList',
  component: SettingListBody,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof SettingListBody>;

export const Primary: Story = {
  args: {
    // id: 1,
    // roomNumber: 101,
    // roomSize: 4,
    // gender: 'MALE',
    // hasKey: true,
  },
};
