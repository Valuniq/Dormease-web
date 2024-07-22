import MainIcon from '@public/images/navigation/Main.png';
import StudentManagementIcon from '@public/images/navigation/StudentManagement.png';
import JoinAndResignationManagementIcon from '@public/images/navigation/JoinAndResignationManagement.png';
import BuildingManagementIcon from '@public/images/navigation/BuildingManagement.png';
import ScheduleManagementIcon from '@public/images/navigation/ScheduleManagement.png';
import NoticeIcon from '@public/images/navigation/Notice.png';
import FAQIcon from '@public/images/navigation/FAQ.png';
import RequestIcon from '@public/images/navigation/Request.png';
import SettingIcon from '@public/images/navigation/Setting.png';

export const StudentManagementRoutes = '/dashboard/StudentManagement';
export const JoinApplicationSettingRoutes = '/dashboard/JoinApplicationSetting';
export const BuildingManagementRoutes = '/dashboard/BuildingManagement';
export const NoticeRoutes = '/dashboard/Notice';
export const FAQRoutes = '/dashboard/FAQ';
export const NoticeWritingRoutes = '/dashboard/Notice/Writing';
export const FAQWritingRoutes = '/dashboard/FAQ/Writing';
export const NoticeDetailRoutes = '/dashboard/Notice/Detail';
export const FAQDetailRoutes = '/dashboard/FAQ/Detail';
export const NoticeEditRoutes = '/dashboard/Notice/Edit';
export const FAQEditRoutes = '/dashboard/FAQ/Edit';

export const NavigationItems = [
  {
    label: '메인 화면',
    routes: '/dashboard',
    icon: MainIcon,
  },
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
      { label: '입금 확인 명단', routes: `${JoinApplicationSettingRoutes}/DepositConfirmation` },
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
    label: '공지사항',
    routes: '/dashboard/Notice',
    icon: NoticeIcon,
  },
  {
    label: 'FAQ',
    routes: '/dashboard/FAQ',
    icon: FAQIcon,
  },
  {
    label: '요청사항',
    routes: '/dashboard/Request',
    icon: RequestIcon,
  },
  {
    label: '계정 관리',
    routes: '/dashboard/Setting',
    icon: SettingIcon,
  },
];
