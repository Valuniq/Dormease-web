import type { Meta, StoryObj } from '@storybook/react';

import CalendarPrompt from './CalendarPrompt';

const meta: Meta<typeof CalendarPrompt> = {
  title: 'components/organisms/Prompt/CalendarPrompt',
  component: CalendarPrompt,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof CalendarPrompt>;

export const Primary: Story = {
  args: {},
};
