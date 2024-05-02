import type { Meta, StoryObj } from '@storybook/react';

import QuillComponent from './QuillComponent';

const meta: Meta<typeof QuillComponent> = {
  title: 'lib/Quill/QuillComponent',
  component: QuillComponent,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof QuillComponent>;

export const Primary: Story = {
  args: {},
};
