import type { Meta, StoryObj } from '@storybook/react';

import LoginInputText from './LoginInputText';

const meta: Meta<typeof LoginInputText> = {
  title: 'components/atoms/InputText/LoginInputText',
  component: LoginInputText,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

export const Enable = {
  args: {
    input: '',
  },
};

export const Focus = {
  args: {
    input: '',
  },
};

export const Filled = {
  args: {
    input: '사용자 입력 텍스트',
  },
};
