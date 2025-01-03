import MediumInputText from '@/components/atoms/InputText/MediumInputText/MediumInputText';
import { distanceScoreState, standardSettingModalState } from '@/recoil/standard';
import { DistanceScoreResList } from '@/types/standard';
import React, { useCallback, useEffect } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';

const Distance = () => {
  const setModalState = useSetRecoilState(standardSettingModalState);
  const [distanceScoreResList, setDistanceScoreResList] = useRecoilState(distanceScoreState);

  // 모달 열기 핸들러
  const handleOpenModal = (regionScore: number) => {
    setModalState((prev) => ({
      ...prev,
      region: {
        ...prev.region,
        isOpened: true, // 모달 열기 상태
        regionScore, // 몇 점짜리 지역을 설정할지 전달
      },
    }));
  };

  return (
    <div className='w-[1200px] h-fit rounded-20 bg-white flex flex-col shadow3 px-15'>
      <div className='w-[1170px] h-52 mt-15 rounded-5 bg-gray-grayscale5 flex items-center justify-start pl-17'>
        <h1 className='H3 text-blue-blue30'>거리 점수</h1>
      </div>
      <div className='mt-16 border-b-2 border-b-gray-grayscale20 mx-15'>
        <h2 className='H4 w-fit border-b border-red-red20 text-red-red20 mb-18'>주의사항</h2>
        <div className='H4 text-black grid gap-16 pb-30'>
          <li>지역명 입력은 &apos;도&apos; 단위 혹은 &apos;시&apos; 단위로 입력해 주세요.</li>
          <li>
            &apos;시&apos; 지역이 겹치는 경우 &apos;도&apos; 단위와 같이 입력해 주세요. (ex. 경기도 광주시, 전라도
            광주시)
          </li>
          <li>지역명 사이에 콤마(,) 표시를 해주세요.</li>
          <li>입력되지 않은 지역은 만점 처리됩니다.</li>
        </div>
      </div>
      <div className='flex flex-col items-end mt-36 mb-28 mx-15'>
        {distanceScoreResList.map((score, index) => (
          <div onClick={() => handleOpenModal(score.distanceScore!!)} className={`flex mb-19`} key={index}>
            <h1 className='w-54 text-right H3 text-gray-grayscale40 ml-84'>{score.distanceScore}점</h1>
            <div className='w-920 ml-56'>
              <MediumInputText
                placeholder={'지역명을 입력해주세요.'}
                input={score.regionResList.map((region) => region.regionName).join(', ')} // 지역명들을 쉼표로 구분한 문자열로 표시
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Distance;
