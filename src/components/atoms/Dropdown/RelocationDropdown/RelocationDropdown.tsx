import React from 'react';
import BtnMidVariant from '../../AllBtn/BtnMidVariant/BtnMidVariant';

type Props = {
  list: string[];
  onOptionClick: (data: string) => void;
};

const RelocationDropdown: React.FC<Props> = ({ list, onOptionClick }) => {
  return (
    <div className='flex flex-col items-center w-155 h-306 rounded-8 bg-white shadow'>
      <div className='mt-29 mb-9 text-center'>
        {list.map((data, index) => {
          return (
            <div key={index} className='pb-11'>
              <BtnMidVariant label={data} variant='white' disabled={false} onClick={() => onOptionClick(data)} />
            </div>
          );
        })}
      </div>
      <BtnMidVariant label='재배치' variant='red' disabled={true} />
    </div>
  );
};

export default RelocationDropdown;
