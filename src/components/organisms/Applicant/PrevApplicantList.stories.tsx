import type { Meta, StoryObj } from '@storybook/react';

import PrevApplicantList from './PrevApplicantList';

const meta: Meta<typeof PrevApplicantList> = {
  title: 'components/organisms/PrevApplicantList',
  component: PrevApplicantList,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof PrevApplicantList>;

export const Primary: Story = {
  args: {
    prevApplicantLists: [
      {
        title: '2024학년도 2학기 재학생, 복학생, 대학원생 입사 신청 안내',
        registrationDate: '20.22.12',
      },
      {
        title: '2024학년도 2학기 재학생, 복학생, 대학원생 입사 신청 안내',
        registrationDate: '20.22.12',
      },
      {
        title: '2024학년도 2학기 재학생, 복학생, 대학원생 입사 신청 안내',
        registrationDate: '20.22.12',
      },
      {
        title: '2024학년도 2학기 재학생, 복학생, 대학원생 입사 신청 안내',
        registrationDate: '20.22.12',
      },
      {
        title: '2024학년도 2학기 재학생, 복학생, 대학원생 입사 신청 안내',
        registrationDate: '20.22.12',
      },
    ],
  },
};
