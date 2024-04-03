import type { Meta, StoryObj } from '@storybook/react';

import TextBoxes from './TextBoxes';

const meta: Meta<typeof TextBoxes> = {
  title: 'components/atoms/InputText/TextBoxes',
  component: TextBoxes,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

export const Enable = {
  args: {
    input: '',

    placeholder: 'test',
    type: 'textBox1',
  },
};

export const Focus = {
  args: {
    input: '',

    placeholder: 'test',
    type: 'textBox1',
  },
};

export const Filled = {
  args: {
    input: 'test',
    placeholder: 'test',

    type: 'textBox1',
  },
};
