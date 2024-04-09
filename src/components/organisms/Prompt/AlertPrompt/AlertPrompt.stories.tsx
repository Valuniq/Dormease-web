import type { Meta, StoryObj } from '@storybook/react';

import Alert from './AlertPrompt';

const meta: Meta<typeof Alert> = {
  title: 'components/organisms/Prompt/AlertPrompt',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

export const Primary = {
  args: {
    label: '이름을 입력해주세요.',
  },
};
