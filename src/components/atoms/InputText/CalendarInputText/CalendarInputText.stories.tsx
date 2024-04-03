import type { Meta, StoryObj } from '@storybook/react';

import CalendarInputText from './CalendarInputText';

const meta: Meta<typeof CalendarInputText> = {
  title: 'components/atoms/InputText/CalendarInputText',
  component: CalendarInputText,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

export const Enable = {
  args: {
    input: '',
    placeholder: '플레이스 홀더 텍스트',
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
