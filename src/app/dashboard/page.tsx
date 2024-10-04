import React from 'react';
import Shortcut from '@/components/templates/Main/Shortcut/Shortcut';
import Schedule from '@/components/templates/Main/Schedule/Schedule';
import Request from '@/components/templates/Main/Request/Request';
import Refund from '@/components/templates/Main/Refund/Refund';
import Notice from '@/components/templates/Main/Notice/Notice';

const Page = () => {
  return (
    <div className='w-full '>
      <h1 className='font-pretendard font-bold text-45 text-blue-blue30 mb-27'>메인 화면</h1>
      <div className='flex items-start gap-63'>
        <div className='flex flex-col gap-25 justify-center'>
          <Shortcut />
          <div className='flex gap-25 items-center'>
            <Request />
            <Refund />
          </div>
        </div>
        <div className='flex flex-col items-center gap-25'>
          <Schedule />
          <Notice />
        </div>
      </div>
    </div>
  );
};

export default Page;
