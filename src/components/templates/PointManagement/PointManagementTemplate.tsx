import PointManagementList from '@/components/organisms/PointManagement/PointManagementList';
import React from 'react';

const PointManagementTemplate = () => {
  return (
    <div>
      <h1>상/벌점 관리</h1>
      검색창 컴포넌트
      <PointManagementList />
      리스트 관리 컴포넌트 버튼 상/벌점 부여 버튼
    </div>
  );
};

export default PointManagementTemplate;
