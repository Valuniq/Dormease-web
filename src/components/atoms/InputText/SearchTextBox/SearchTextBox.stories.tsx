import type { Meta, StoryObj } from '@storybook/react';

import SearchTextBox from './SearchTextBox';

const meta: Meta<typeof SearchTextBox> = {
  title: 'components/atoms/InputText/SearchTextBox',
  component: SearchTextBox,
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
