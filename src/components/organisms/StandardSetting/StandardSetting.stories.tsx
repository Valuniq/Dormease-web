import type { Meta, StoryObj } from '@storybook/react';

import StandardSetting from './StandardSetting';

const meta: Meta<typeof StandardSetting> = {
  title: 'components/organisms/StandardSetting/StandardSetting',
  component: StandardSetting,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof StandardSetting>;

export const Primary: Story = {
  args: {
    isSmokingOn: true,
    setIsSmokingOn: () => {},
    isSamePeriodOn: false,
    setIsSamePeriodOn: () => {},
    isPointOn: false,
    setIsPointOn: () => {},
    isPriorityOn: true,
    setIsPriorityOn: () => {},
    isMovingOn: false,
    setIsMovingOn: () => {},

    scores: [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5],
    inputs: [],
    setInput: () => {},
  },
};
