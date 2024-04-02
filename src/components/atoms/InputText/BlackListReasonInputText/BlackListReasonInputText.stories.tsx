import type { Meta, StoryObj } from '@storybook/react';

import BlackListReasonInputText from './BlackListReasonInputText';

const meta: Meta<typeof BlackListReasonInputText> = {
  title: 'components/atoms/InputText/BlackListReasonInputText',
  component: BlackListReasonInputText,
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
    isFocused: false,
  },
};
