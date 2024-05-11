import type { Meta, StoryObj } from '@storybook/react';

import CalendarPromptAdd from './CalendarPromptAdd';

const meta: Meta<typeof CalendarPromptAdd> = {
  title: 'components/organisms/Prompt/CalendarPromptAdd',
  component: CalendarPromptAdd,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof CalendarPromptAdd>;

export const Primary: Story = {
  args: {},
};
