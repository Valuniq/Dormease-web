import { TermResponseInformation } from '@/types/student';
import BuildingOutBigBtn from '@public/images/BuildingOutBigBtn.svg';

type Props = {
  list: TermResponseInformation[];
  onCancel: () => void;
  onClick: (availableTermRes: TermResponseInformation['availableTermRes']) => void;
};

const TermList = ({ list, onCancel, onClick }: Props) => {
  return (
    <div className='bg-white flex flex-col gap-19 p-16 rounded-20'>
      <div className='bg-gray-grayscale5 w-517 py-18 rounded-4'>
        <h1 className='H1 text-gray-grayscale50 text-center'>입사 신청 목록</h1>
        <BuildingOutBigBtn className='absolute right-16 top-16' onClick={onCancel} />
      </div>
      <div className='bg-gray-grayscale5 w-517 p-11 rounded-4'>
        {list.map((data, index) => {
          return (
            <div
              key={index}
              className='px-5 py-8 H4-caption overflow-hidden whitespace-nowrap overflow-ellipsis'
              onClick={() => onClick(data.availableTermRes)}
            >
              {data.title}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TermList;
