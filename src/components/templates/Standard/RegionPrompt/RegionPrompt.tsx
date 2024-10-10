'use client';
import Image from 'next/image';
import PromptLogo from '@public/images/PromptLogo.png';
import PromptOut from '@public/images/PromptOut.png';
import React, { useEffect, useState } from 'react';
import LongInputText from '@/components/atoms/InputText/LongInputText/LongInputText';
import { distanceScoreState, standardSettingModalState } from '@/recoil/standard';
import { useRecoilState } from 'recoil';
import Checkbox from '@/components/atoms/AllBtn/Checkbox/Checkbox';
import AlertBtn from '@/components/atoms/AllBtn/AlertBtn/AlertBtn';
import { useRegions, useRegionsDetail } from '@/apis/standard';

interface SelectedRegion {
  regionId: number;
  regionName: string;
}

interface SelectedSubRegion {
  regionId: number;
  regionName: string;
}

const RegionPrompt: React.FC = () => {
  const [regionsId, setRegionsId] = useState<number>(1); // 서울특별시의 ID (1)로 초기화
  const { data: regions } = useRegions(); // 광역시도 데이터 가져옴
  const { data: regionsDetail } = useRegionsDetail(regionsId); // 선택된 광역시도의 상세 데이터를 저장
  const [distanceScoreResList, setDistanceScoreResList] = useRecoilState(distanceScoreState);
  const [modalState, setModalState] = useRecoilState(standardSettingModalState);

  // 광역시도와 세부 지역을 별도로 관리
  const [selectedRegions, setSelectedRegions] = useState<SelectedRegion[]>([]); // 광역시도만
  const [selectedSubRegions, setSelectedSubRegions] = useState<SelectedSubRegion[]>([]); // 세부 지역만

  // 모달 닫기
  const handleCloseModal = () => {
    setModalState((prev) => ({
      ...prev,
      region: {
        ...prev.region,
        isOpened: false,
      },
    }));
  };

  // 서버에서 받은 값들로 초기화
  useEffect(() => {
    const scoreData = distanceScoreResList.find((item) => item.distanceScore === modalState.region.regionScore);
    if (scoreData) {
      const selectedRegionIds = scoreData.regionResList.filter((region) =>
        regions?.information.some((r) => r.regionId === region.regionId),
      );
      const selectedSubRegionIds = scoreData.regionResList.filter(
        (region) => !regions?.information.some((r) => r.regionId === region.regionId),
      );

      setSelectedRegions(
        selectedRegionIds.map((region) => ({
          regionId: region.regionId,
          regionName: region.regionName,
        })),
      );

      setSelectedSubRegions(
        selectedSubRegionIds.map((subRegion) => ({
          regionId: subRegion.regionId,
          regionName: subRegion.regionName,
        })),
      );
    }
  }, [distanceScoreResList, modalState.region.regionScore, regions]);

  // 광역시도 체크박스 선택 핸들러
  const handleSelectRegion = (regionId: number, regionName: string) => {
    setSelectedRegions((prev) => {
      const isSelected = prev.some((region) => region.regionId === regionId);
      if (isSelected) {
        return prev.filter((region) => region.regionId !== regionId);
      } else {
        return [...prev, { regionId, regionName }];
      }
    });
    // 광역시도 선택 시 그에 속한 세부 지역 체크박스 비활성화
    setSelectedSubRegions((prev) => prev.filter((subRegion) => subRegion.regionId !== regionId));
  };

  // 세부 지역 체크박스 선택 핸들러
  const handleSelectSubRegion = (regionId: number, regionName: string) => {
    setSelectedSubRegions((prev) => {
      const isAlreadySelected = prev.some((subRegion) => subRegion.regionId === regionId);
      if (isAlreadySelected) {
        return prev.filter((subRegion) => subRegion.regionId !== regionId);
      } else {
        return [...prev, { regionId, regionName }];
      }
    });
  };

  // "확인" 버튼 클릭 시 선택된 값 Recoil로 전달
  const handleSave = () => {
    const updatedList = distanceScoreResList.map((item) => {
      if (item.distanceScore === modalState.region.regionScore) {
        return {
          ...item,
          regionResList: [
            ...selectedRegions.map(({ regionId, regionName }) => ({
              regionId,
              regionName,
              information: {}, // 필요한 정보 추가 가능
            })),
            ...selectedSubRegions.map(({ regionId, regionName }) => ({
              regionId,
              regionName,
              information: {},
            })),
          ],
        };
      }
      return item;
    });
    setDistanceScoreResList(updatedList);
    handleCloseModal();
  };

  return (
    <div className='w-817 h-671 bg-white flex flex-col px-auto rounded-8'>
      {/* 모달 상단 영역 */}
      <div className={`bg-blue-blue30 w-full h-39 flex justify-between pl-15 rounded-t-8`}>
        <Image src={PromptLogo} className='object-contain' width={39} height={11.65} alt='PromptLogo' />
        <button
          onClick={handleCloseModal}
          className={`hover:bg-red-red30 bg-blue-blue30 w-39 h-39 flex items-center justify-center rounded-tr-8 hover-transition`}
        >
          <Image src={PromptOut} className='object-contain' width={10} height={10} alt='PromptOut' />
        </button>
      </div>

      {/* 모달 본문 영역 */}
      <div className='p-15 w-full h-full'>
        <div className='H1 text-gray-grayscale50 mb-15'>{modalState.region.regionScore}점</div>
        <LongInputText width='w-full' placeholder='지역명 검색' input={''} setInput={() => {}} />

        {/* 지역 선택 영역 */}
        <div className='mt-16 flex h-[434px] items-start justify-center w-[761px] border-b-1 border-b-gray-grayscale20'>
          {/* 광역시도 목록 */}
          <div className='pl-24 w-275 h-[434px] overflow-y-scroll border-r border-gray-grayscale20'>
            {regions?.information &&
              regions.information.map((region) => (
                <li key={region.regionId} className='flex items-center gap-14 H4 text-gray-grayscale50 mb-16'>
                  {/* 광역시도 체크박스 */}
                  <Checkbox
                    isChecked={selectedRegions.some((r) => r.regionId === region.regionId)}
                    setIsChecked={() => handleSelectRegion(region.regionId, region.regionName)}
                  />
                  {/* 상세 지역 보기 */}
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      setRegionsId(region.regionId); // 상세 지역 보기 설정
                    }}
                    className={`${
                      regionsId === region.regionId ? 'bg-gray-grayscale10' : 'bg-white'
                    } cursor-pointer w-full mr-10 pl-15 p-3 rounded-r-50 rounded-l-10 hover-transition hover:bg-gray-grayscale10`}
                  >
                    {region.regionName}
                  </div>
                </li>
              ))}
          </div>

          {/* 선택한 광역시도의 상세 지역(구) 목록 */}
          <div className='pl-24 w-[486px] h-[434px] overflow-y-scroll'>
            {regionsDetail?.information &&
              regionsDetail.information.map((region) => (
                <li key={region.regionId} className='flex items-center gap-14 H4 text-gray-grayscale50 mb-16'>
                  <Checkbox
                    isChecked={selectedSubRegions.some((subRegion) => subRegion.regionId === region.regionId)}
                    setIsChecked={() => handleSelectSubRegion(region.regionId, region.regionName)}
                    disabled={selectedRegions.some((r) => r.regionId === regionsId)} // 광역시도가 선택된 경우 비활성화
                  />
                  {region.regionName}
                </li>
              ))}
          </div>
        </div>
      </div>

      {/* 모달 하단 버튼 */}
      <div className='ml-auto mb-20'>
        <AlertBtn label={'취소'} onClick={handleCloseModal} hoverColor={'blue'} />
        <AlertBtn label={'확인'} onClick={handleSave} hoverColor={'blue'} />
      </div>
    </div>
  );
};

export default RegionPrompt;
