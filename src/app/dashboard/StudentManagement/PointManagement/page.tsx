'use client';

import { usePointMemberList, usePointsDetail } from '@/apis/PointManagment';
import PointManagementTemplate from '@/components/templates/pointManagement/index';
import { PointMemberResponseDataList, PointListResponseInfo } from '@/types/pointManagement';

const PointManagementPage = () => {
  const {
    data: pointManagementData,
    error: pointManagementError,
    isLoading: pointManagementLoading,
  } = usePointMemberList(1);
  const { data: pointData, error: pointError, isLoading: pointLoading } = usePointsDetail();

  if (pointManagementLoading || pointLoading) {
    return <div>Loading...</div>;
  }

  if (pointManagementError || pointError) {
    console.error('Error fetching point management data:', pointManagementError);
    console.error('Error fetching point data:', pointError);
    return <div>Error loading data</div>;
  }

  const pointManagementLists: PointMemberResponseDataList[] = pointManagementData?.information.dataList ?? [];
  const pointLists: PointListResponseInfo[] = pointData?.information ?? [];

  return <PointManagementTemplate pointManagementLists={pointManagementLists} pointLists={pointLists} />;
};

export default PointManagementPage;
