import { Props } from '@/components/organisms/Applicant/ApplicantListBody';

export const mockApplicantList: Props[] = [
  {
    name: '김철수',
    studentId: '20210101',
    gender: '남',
    applicationBuilding: '기숙사 A동',
    residence: '서울특별시 강남구 테헤란로 123',
    certifiedFile: null,
    prioritySelection: null,
    assignedBuilding: '기숙사 B동',
    isPassed: 'pass', // 'pass' | 'out' | 'movingPass' 중 하나
    isChecked: false,
    setIsChecked: (d: boolean) => {},
  },
  {
    name: '박영희',
    studentId: '20210202',
    gender: '여',
    applicationBuilding: '기숙사 C동',
    residence: '부산광역시 해운대구 해운대로 456',
    certifiedFile: null,
    prioritySelection: null,
    assignedBuilding: null,
    isPassed: 'out', // 'pass' | 'out' | 'movingPass' 중 하나
    isChecked: false,
    setIsChecked: (d: boolean) => {},
  },
  {
    name: '이민수',
    studentId: '20210303',
    gender: '남',
    applicationBuilding: '기숙사 D동',
    residence: '대구광역시 수성구 동대구로 789',
    certifiedFile: null,
    prioritySelection: null,
    assignedBuilding: '기숙사 E동',
    isPassed: 'movingPass', // 'pass' | 'out' | 'movingPass' 중 하나
    isChecked: false,
    setIsChecked: (d: boolean) => {},
  },
  {
    name: '최지우',
    studentId: '20210404',
    gender: '여',
    applicationBuilding: '기숙사 F동',
    residence: '인천광역시 남동구 예술로 123',
    certifiedFile: null,
    prioritySelection: null,
    assignedBuilding: null,
    isPassed: 'pass', // 'pass' | 'out' | 'movingPass' 중 하나
    isChecked: false,
    setIsChecked: (d: boolean) => {},
  },
  {
    name: '홍길동',
    studentId: '20210505',
    gender: '남',
    applicationBuilding: '기숙사 G동',
    residence: '대전광역시 유성구 대학로 456',
    certifiedFile: null,
    prioritySelection: null,
    assignedBuilding: '기숙사 H동',
    isPassed: 'out', // 'pass' | 'out' | 'movingPass' 중 하나
    isChecked: false,
    setIsChecked: (d: boolean) => {},
  },
];
