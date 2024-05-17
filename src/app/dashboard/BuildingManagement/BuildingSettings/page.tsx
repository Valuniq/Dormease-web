import { getBuildingLists } from '@/apis/Building';
import BuildingTemplate from '@/components/templates/BuildingSetting';

const BuildingSettings = async () => {
  const list = await getBuildingLists(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/web/dormitory/setting`);
  console.log(list);

  return (
    <div className='flex flex-col w-[1200px]'>
      <h1 className='H0 text-gray-grayscale50 text-center mb-35'>건물 설정</h1>
      <BuildingTemplate list={list.information} />
    </div>
  );
};

export default BuildingSettings;
