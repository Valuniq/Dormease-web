import type { Meta, StoryObj } from '@storybook/react';

import PointBar from './PointBar';

const meta: Meta<typeof PointBar> = {
  title: 'components/atoms/InputText/PointBar',
  component: PointBar,
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
    input: '999',
  },
};
