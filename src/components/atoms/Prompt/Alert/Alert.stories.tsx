import type { Meta, StoryObj } from '@storybook/react';

import Alert from './Alert';

const meta: Meta<typeof Alert> = {
  title: 'components/atoms/Prompt/Alert/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

export const Primary = {
  args: {},
};
