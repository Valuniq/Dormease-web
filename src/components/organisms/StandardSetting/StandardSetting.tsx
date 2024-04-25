import DistanceScore from './DistanceScore';
import StandardCheck from './StandardCheck';

type Props = {
  isSmokingOn: boolean;
  setIsSmokingOn: (isSmokingOn: boolean) => void;
  isSamePeriodOn: boolean;
  setIsSamePeriodOn: (isSamePerioOn: boolean) => void;
  isPointOn: boolean;
  setIsPointOn: (isPointOn: boolean) => void;
  isPriorityOn: boolean;
  setIsPriorityOn: (isPriorityOn: boolean) => void;
  isMovingOn: boolean;
  setIsMovingOn: (isMovingOn: boolean) => void;
  scores: number[];
  inputs: string[];
  setInput: (index: number, value: string) => void;
};

const StandardSetting = ({
  isSmokingOn,
  setIsSmokingOn,
  isSamePeriodOn,
  setIsSamePeriodOn,
  isPointOn,
  setIsPointOn,
  isPriorityOn,
  setIsPriorityOn,
  isMovingOn,
  setIsMovingOn,
  scores,
  inputs,
  setInput,
}: Props) => {
  return (
    <div>
      <div className='text-center w-550'>
        <div className='mb-13 pb-16 border-b-[0.5px] border-b-gray-grayscale50 '>
          <h1 className=' mb-13 H3 text-blue-blue30'>배점 기준</h1>
          <StandardCheck label={'흡연 여부'} isOn={isSmokingOn} setIsOn={setIsSmokingOn} />
          <StandardCheck label={'동일 기간'} isOn={isSamePeriodOn} setIsOn={setIsSamePeriodOn} />
        </div>
        <div className='mb-13'>
          <h1 className='mb-13 H3 text-blue-blue30'>합격 기준</h1>
          <StandardCheck label={'상/벌점'} isOn={isPointOn} setIsOn={setIsPointOn} />
          <StandardCheck label={'우선 선발'} isOn={isPriorityOn} setIsOn={setIsPriorityOn} />
          <StandardCheck label={'이동 합격'} isOn={isMovingOn} setIsOn={setIsMovingOn} />
        </div>
        <h1 className='mb-13 H3 text-blue-blue30'>거리 점수 기준</h1>
        <DistanceScore scores={scores} inputs={inputs} setInput={setInput} />
      </div>
    </div>
  );
};

export default StandardSetting;
