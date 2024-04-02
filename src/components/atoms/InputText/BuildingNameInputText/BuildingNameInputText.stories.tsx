import type { Meta, StoryObj } from '@storybook/react';

import BuildingNameInputText from './BuildingNameInputText';

const meta: Meta<typeof BuildingNameInputText> = {
  title: 'components/atoms/InputText/BuildingNameInputText',
  component: BuildingNameInputText,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

export const Enable = {
  args: {
    input: '',
    placeholder: '플레이스홀더 텍스트',
  },
};

export const Focus = {
  args: {
    input: '',
    placeholder: '플레이스홀더 텍스트',
  },
};

export const Filled = {
  args: {
    input: '사용자 입력 텍스트',
    placeholder: '플레이스홀더 텍스트',
  },
};
