import type { Meta, StoryObj } from '@storybook/react';

import ChangeIDPWInputText from './ChangeIDPWInputText';

const meta: Meta<typeof ChangeIDPWInputText> = {
  title: 'components/atoms/InputText/ChangeIDPWInputText',
  component: ChangeIDPWInputText,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

export const Enable = {
  args: {
    placeholder: '플레이스 홀더 텍스트',
    input: '',
  },
};

export const Focus = {
  args: {
    placeholder: '플레이스 홀더 텍스트',
    input: '',
  },
};

export const Filled = {
  args: {
    placeholder: '플레이스 홀더 텍스트',
    input: '사용자 입력 텍스트',
  },
};

export const PWFilled = {
  args: {
    placeholder: '플레이스 홀더 텍스트',
    input: '사용자 입력 텍스트',

    type: 'password',
  },
};
