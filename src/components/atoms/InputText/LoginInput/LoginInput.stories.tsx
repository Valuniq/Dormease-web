import type { Meta, StoryObj } from '@storybook/react';

import LoginInput from './LoginInput';

const meta: Meta<typeof LoginInput> = {
  title: 'components/atoms/InputText/LoginInput/LoginInput',
  component: LoginInput,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

export const Primary = {
  args: {
    disabled: false,
  },
};
