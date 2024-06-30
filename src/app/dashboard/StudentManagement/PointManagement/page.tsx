'use client';
import { getPointMemberList, getPointsDetail } from '@/apis/PointManagment';
import PointManagementTemplate from '@/components/templates/pointManagement/index';
import { ACCESS_TOKEN } from '@/constants/tokenKey';
import { PointMemberResponse, PointListResponse } from '@/types/pointManagement';
import tokenManager from '@/utils/tokenManager';
import { Suspense, useEffect, useState } from 'react';

const page = () => {
  const [pointManagementLists, setPointManagementLists] = useState<PointMemberResponse['information']['dataList']>([]);
  const [pointLists, setPointLists] = useState<PointListResponse['information']>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pointManagementData = await getPointMemberList(1);
        const pointData = await getPointsDetail();
        setPointManagementLists(pointManagementData.information.dataList);
        setPointLists(pointData.information);
        setLoading(false);
      } catch (err) {
        setError(err as Error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.log(tokenManager.getToken(ACCESS_TOKEN));
    return <div>Error loading data: {error.message}</div>;
  }

  return <PointManagementTemplate pointManagementLists={pointManagementLists} pointLists={pointLists} />;
};

export default page;
