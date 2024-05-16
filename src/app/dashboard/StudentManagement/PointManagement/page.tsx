import { getPointsMemberList } from '@/apis/PointManagment';
import BtnMidVariant from '@/components/atoms/AllBtn/BtnMidVariant/BtnMidVariant';
import SearchTextBox from '@/components/atoms/InputText/SearchTextBox/SearchTextBox';
import PointManagementList from '@/components/organisms/PointManagement/PointManagementList';
import { REFRESH_TOKEN } from '@/constants/tokenKey';
import tokenManager from '@/utils/tokenManager';

async function getData() {
  const res = await fetch(`http://13.209.177.109:8080/api/v1/web/points?page=0`, {
    headers: {
      Authorization:
        'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJwaG9uaWw6VVNFUiIsImlzcyI6IkRvcm1lYXNlVmFsdW5pUSIsImlhdCI6MTcxNTg0NjY4NSwiZXhwIjoxNzE1ODQ4NDg1fQ.KalH7VIk-mKsC00vtOSL_nn43luPmlDPhPJfkRj2Kb9t4WzUaJNNnzUJU3dL-4IAX5g3xyjwD8q9ITcoOTpktw',
    },
  });

  const response = await res.json();
  return response;
}

const page = async () => {
  const data = await getData();
  console.log(data);
  console.log(tokenManager.getAccessToken);
  return (
    <div className='w-[1250px]'>
      <div className='flex items-center justify-between mb-40'>
        <h1 className='H0 text-gray-grayscale50'>상/벌점 관리</h1>
        {/* <SearchTextBox
          placeholder='이름 또는 학번'
          input={''}
          setInput={function (id: string): void {
            throw new Error('Function not implemented.');
          }}
        /> */}
      </div>
      {/* <PointManagementList
        pointManagementLists={[]}
        isAllChecked={false}
        setIsAllChecked={function (isAllChecked: boolean): void {
          throw new Error('Function not implemented.');
        }}
        plusSort={false}
        setPlusSort={function (plusSort: boolean): void {
          throw new Error('Function not implemented.');
        }}
        minusSort={false}
        setMinusSort={function (minusSort: boolean): void {
          throw new Error('Function not implemented.');
        }}
      /> */}
      {/* <div className='mt-13 flex items-center justify-between'>
        <BtnMidVariant label={'리스트 관리'} disabled={false} variant={'gray'} />
        <BtnMidVariant label={'상/벌점 부여'} disabled={false} variant={'blue'} />
      </div> */}
    </div>
  );
};

export default page;
