'use client';
import BtnMiniVariant from '@/components/atoms/AllBtn/BtnMiniVariant/BtnMiniVariant';
import Checkbox from '@/components/atoms/AllBtn/Checkbox/Checkbox';
import PenaltyHistoryListBody from '@/components/organisms/Prompt/PenaltyHistoryPrompt/PenaltyHistoryListBody';
import PromptHeader from '@/components/atoms/Prompt/PromptHeader/PromptHeader';
import { ResidentPointResponseUserPointDetailRes } from '@/types/pointManagement';
import { TPointManagementModalState } from '@/recoil/pointManagement';

// type PenaltyList = {
//   date: string;
//   reason: string;
//   score: string;
//   division: 'minus' | 'plus';
//   isChecked: boolean;
//   setIsChecked: (isChecked: boolean) => void;
// };

type Props = {
  penaltyLists: ResidentPointResponseUserPointDetailRes[];
  plusSum: number;
  minusSum: number;
  isAllChecked: boolean;
  setIsAllChecked: (isAllChecked: boolean) => void;
  closeModalName: keyof TPointManagementModalState;
};

const PenaltyHistoryPrompt = ({
  penaltyLists,
  isAllChecked,
  setIsAllChecked,
  plusSum,
  minusSum,
  closeModalName,
}: Props) => {
  return (
    <div className='bg-white w-767 h-422 flex flex-col items-center rounded-8 shadow-xl '>
      <PromptHeader closeModalName={closeModalName} />
      <div className='w-709 pt-18 h-309 overflow-auto border-b-1 border-b-[#323232]'>
        <table className='w-full'>
          <thead className='text-gray-grayscale40'>
            <tr className='pb-30'>
              <th className='H4'>날 짜</th>
              <th className='H4'>사 유</th>
              <th className='H4'>점 수</th>
              <th className='H4'>종 류</th>
              <th>
                <div className='H4 flex  items-center justify-center text-center w-full'>
                  <h1 className='mr-4'>전체</h1>
                  <Checkbox isChecked={isAllChecked} setIsChecked={setIsAllChecked} />
                </div>
              </th>
            </tr>
          </thead>

          <tbody className='  border-t-1 border-t-[#323232]'>
            {penaltyLists.map((p, index) => (
              <>
                {/* 여백용 tr */}
                <tr className='h-19' />
                <tr key={index}>
                  <PenaltyHistoryListBody
                    date={p.createdAt}
                    reason={p.content}
                    score={p.score}
                    division={p.pointType === 0 ? 'BONUS' : 'MINUS'}
                  />
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
      <div className='mt-17 flex ml-auto mr-29 w-393 justify-between'>
        <BtnMiniVariant label={'삭제'} disabled={false} selected={false} variant={'blue'} />
        <div className='flex'>
          <h1 className='caption-1 text-gray-grayscale50'>
            TOTAL - 상점 {plusSum}점 / 벌점 {minusSum}점
          </h1>
        </div>
      </div>
    </div>
  );
};

export default PenaltyHistoryPrompt;
