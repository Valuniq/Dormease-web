import type { Meta, StoryObj } from '@storybook/react';

import FileNameDeleteBtn from './FileNameDeleteBtn';

const meta: Meta<typeof FileNameDeleteBtn> = {
  title: 'components/atoms/AllBtn/FileNameDeleteBtn',
  component: FileNameDeleteBtn,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof FileNameDeleteBtn>;

export const Primary: Story = {
  args: {
    fileName: '2024-2학기 입사신청 안내문 (hwp)',
  },
};
