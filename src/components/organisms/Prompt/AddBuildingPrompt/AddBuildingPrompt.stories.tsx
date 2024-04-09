import type { Meta, StoryObj } from '@storybook/react';

import AddBuildingPrompt from './AddBuildingPrompt';

const meta: Meta<typeof AddBuildingPrompt> = {
  title: 'components/organisms/Prompt/AddBuildingPrompt',
  component: AddBuildingPrompt,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof AddBuildingPrompt>;

export const Primary: Story = {
  args: {},
};
