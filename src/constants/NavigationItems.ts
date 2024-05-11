import StudentManagementIcon from '@public/images/navigation/StudentManagement.png';
import JoinAndResignationManagementIcon from '@public/images/navigation/JoinAndResignationManagement.png';
import BuildingManagementIcon from '@public/images/navigation/BuildingManagement.png';
import ScheduleManagementIcon from '@public/images/navigation/ScheduleManagement.png';
import NoticeIcon from '@public/images/navigation/Notice.png';
import FAQIcon from '@public/images/navigation/FAQ.png';
import RequestIcon from '@public/images/navigation/Request.png';
import MealTicketManagementIcon from '@public/images/navigation/MealTicketManagement.png';
import SettingIcon from '@public/images/navigation/Setting.png';

const StudentManagementRoutes = '/dashboard/StudentManagement';
const JoinApplicationSettingRoutes = '/dashboard/JoinApplicationSetting';
const BuildingManagementRoutes = '/dashboard/BuildingManagement';

export const NavigationItems = [
  {
    label: '학생 관리',
    routes: StudentManagementRoutes,
    icon: StudentManagementIcon,
    subMenu: [
      { label: '사생 관리', routes: StudentManagementRoutes },
      { label: '상/벌점 관리', routes: `${StudentManagementRoutes}/PointManagement` },
      { label: '앱 회원관리', routes: `${StudentManagementRoutes}/AppMemberManagement` },
      { label: '블랙리스트', routes: `${StudentManagementRoutes}/BlackList` },
      { label: '탈퇴회원관리', routes: `${StudentManagementRoutes}/WithdrawalMemberManagement` },
    ],
  },
  {
    label: '입/퇴사 관리',
    routes: JoinApplicationSettingRoutes,
    icon: JoinAndResignationManagementIcon,
    subMenu: [
      { label: '입사 신청 설정', routes: JoinApplicationSettingRoutes },
      { label: '기준 설정', routes: `${JoinApplicationSettingRoutes}/StandardSetting` },
      { label: '신청자 명단', routes: `${JoinApplicationSettingRoutes}/Applicant` },
      { label: '합격자 명단', routes: `${JoinApplicationSettingRoutes}/PassMember` },
      { label: '환불 신청', routes: `${JoinApplicationSettingRoutes}/Refund` },
      { label: '퇴사 확인서', routes: `${JoinApplicationSettingRoutes}/Resignation` },
    ],
  },
  {
    label: '건물 관리',
    routes: BuildingManagementRoutes,
    icon: BuildingManagementIcon,
    subMenu: [
      { label: '건물 관리', routes: BuildingManagementRoutes },
      { label: '건물 설정', routes: `${BuildingManagementRoutes}/BuildingSettings` },
    ],
  },
  {
    label: '일정 관리',
    routes: '/dashboard/ScheduleManagement',
    icon: ScheduleManagementIcon,
  },
  {
    label: '공지 사항',
    routes: '/dashboard/Notice',
    icon: NoticeIcon,
  },
  {
    label: 'FAQ',
    routes: '/dashboard/FAQ',
    icon: FAQIcon,
  },
  {
    label: '요청 사항',
    routes: '/dashboard/Request',
    icon: RequestIcon,
  },
  {
    label: '식권 관리',
    routes: '/dashboard/',
    icon: MealTicketManagementIcon,
  },
  {
    label: '설정',
    routes: '/dashboard/Setting',
    icon: SettingIcon,
  },
];
