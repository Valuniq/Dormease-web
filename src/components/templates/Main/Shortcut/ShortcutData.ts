import { joinsRoutes, studentsRoutes, dorms } from '@/constants/navigation';

export const shortcutData = [
  {
    label: '사생관리',
    link: `${studentsRoutes}`,
    mainColor: '#3678D8',
    linkTextColor: '#999999',
    backgroundColor: 'white',
    labelWidth: 87,
  },
  {
    label: '상/벌점 관리',
    link: `${studentsRoutes}/points`,
    mainColor: 'white',
    linkTextColor: 'white',
    backgroundColor: '#3678D8',
    labelWidth: 149,
  },
  {
    label: '퇴사 확인서',
    link: `${joinsRoutes}/resigns`,
    mainColor: 'white',
    linkTextColor: 'white',
    backgroundColor: '#D83636',
    labelWidth: 130,
  },
  {
    label: '건물 관리',
    link: `${dorms}`,
    mainColor: 'white',
    linkTextColor: 'white',
    backgroundColor: '#474747',
    labelWidth: 87,
  },
];
