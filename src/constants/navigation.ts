import MainIcon from '@public/images/navigation/Main.png';
import StudentManagementIcon from '@public/images/navigation/StudentManagement.png';
import JoinAndResignationManagementIcon from '@public/images/navigation/JoinAndResignationManagement.png';
import BuildingManagementIcon from '@public/images/navigation/BuildingManagement.png';
import ScheduleManagementIcon from '@public/images/navigation/ScheduleManagement.png';
import NoticeIcon from '@public/images/navigation/Notice.png';
import FAQIcon from '@public/images/navigation/FAQ.png';
import RequestIcon from '@public/images/navigation/Request.png';
import SettingIcon from '@public/images/navigation/Setting.png';

// 학생 관리 (사생 관리)
export const studentsRoutes = '/dashboard/students';
// 입/퇴사 관리
export const joinsRoutes = '/dashboard/joins';
// 건물 관리
export const dorms = '/dashboard/dorms';
// 일정 관리
export const schedules = '/dashboard/schedules';
// 요청 사항
export const requests = '/dashboard/requests';
export const requestsDetail = '/dashboard/requests/details';
// 신청자 명단
export const applicants = '/dashboard/joins/applicants';
// 이전 입사 신청 설정 내역
export const prevApplicants = '/dashboard/joins/applicants/prev';
// 공지사항
export const noticesRoutes = '/dashboard/notices';
export const noticesWritingRoutes = '/dashboard/notices/writings';
export const noticesDetailRoutes = '/dashboard/notices/details';
export const noticesEditRoutes = '/dashboard/notices/edits';

// FAQ
export const supportsRoutes = '/dashboard/supports';
export const supportsWritingRoutes = '/dashboard/supports/writings';
export const supportsDetailRoutes = '/dashboard/supports/details';
export const supportsEditRoutes = '/dashboard/supports/edits';

export const NavigationItems = [
  {
    label: '메인 화면',
    routes: '/dashboard',
    icon: MainIcon,
  },
  {
    label: '학생 관리',
    routes: studentsRoutes,
    icon: StudentManagementIcon,
    subMenu: [
      { label: '사생 관리', routes: studentsRoutes },
      { label: '상/벌점 관리', routes: `${studentsRoutes}/points` },
      { label: '앱 회원관리', routes: `${studentsRoutes}/appMembers` },
      { label: '블랙리스트', routes: `${studentsRoutes}/blacklists` },
      { label: '탈퇴회원관리', routes: `${studentsRoutes}/withdrawals` },
    ],
  },
  {
    label: '입/퇴사 관리',
    routes: joinsRoutes,
    icon: JoinAndResignationManagementIcon,
    subMenu: [
      { label: '입사 신청 설정', routes: joinsRoutes },
      { label: '기준 설정', routes: `${joinsRoutes}/standards` },
      { label: '신청자 명단', routes: `${joinsRoutes}/applicants` },
      { label: '입금 확인 명단', routes: `${joinsRoutes}/deposits` },
      { label: '합격자 명단', routes: `${joinsRoutes}/passMembers` },
      { label: '환불 신청', routes: `${joinsRoutes}/refunds` },
      { label: '퇴사 확인서', routes: `${joinsRoutes}/resigns` },
    ],
  },
  {
    label: '건물 관리',
    routes: dorms,
    icon: BuildingManagementIcon,
    subMenu: [
      { label: '건물 관리', routes: dorms },
      { label: '건물 설정', routes: `${dorms}/settings` },
    ],
  },
  {
    label: '일정 관리',
    routes: '/dashboard/schedules',
    icon: ScheduleManagementIcon,
  },
  {
    label: '공지사항',
    routes: '/dashboard/notices',
    icon: NoticeIcon,
  },
  {
    label: 'FAQ',
    routes: '/dashboard/supports',
    icon: FAQIcon,
  },
  {
    label: '요청사항',
    routes: '/dashboard/requests',
    icon: RequestIcon,
  },
  {
    label: '계정 관리',
    routes: '/dashboard/accounts',
    icon: SettingIcon,
  },
];
