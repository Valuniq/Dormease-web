import type { Meta, StoryObj } from '@storybook/react';

import MediumInputText from './MediumInputText';

const meta: Meta<typeof MediumInputText> = {
  title: 'components/atoms/InputText/MediumInputText',
  component: MediumInputText,
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
