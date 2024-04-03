import type { Meta, StoryObj } from '@storybook/react';

import Alert from './AlertPrompt';

const meta: Meta<typeof Alert> = {
  title: 'components/atoms/Prompt/AlertPrompt',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

export const Primary = {
  args: {},
};
