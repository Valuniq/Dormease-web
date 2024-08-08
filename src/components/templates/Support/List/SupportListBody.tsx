'use client';

import React, { forwardRef, ForwardRefRenderFunction } from 'react';

import pinIcon from '@public/images/pinIcon.png';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { useSetRecoilState } from 'recoil';
import { supportsDetailRoutes } from '@/constants/navigation';
import { supportIdState } from '@/recoil/support';
import { supportResponseDataList } from '@/types/support';

type Props = supportResponseDataList;

const SupportListBody: ForwardRefRenderFunction<HTMLTableRowElement, Props> = (
  { notificationId, pinned, title, writer, createdDate, existFile },
  ref,
) => {
  const slicedTitle = title.length > 35 ? title.slice(0, 35) + '...' : title;
  const router = useRouter();
  const setId = useSetRecoilState(supportIdState);

  return (
    <tr
      ref={ref}
      className={` ${pinned ? 'bg-gray-grayscale10' : 'bg-white'} h-38 hover-transition hover:bg-gray-grayscale10 cursor-pointer active:bg-gray-grayscale20 H4-caption text-gray-grayscale50`}
      onClick={() => {
        setId(notificationId);
        router.push(supportsDetailRoutes);
      }}
    >
      <td className='text-center'>
        {pinned ? (
          <div className='flex items-center justify-center'>
            {notificationId}
            <Image className='object-contain ml-2' src={pinIcon} width={13} height={19.61} alt='pinIcon' />
          </div>
        ) : (
          <> {notificationId}</>
        )}
      </td>
      <td className='text-center'>{slicedTitle}</td>
      <td className='text-center'>{writer}</td>
      <td className='text-center'>{createdDate}</td>
      <td className='text-center'>{existFile ? 'O' : 'X'}</td>
      <td className='text-center'>조회수</td>
    </tr>
  );
};

export default forwardRef<HTMLTableRowElement, supportResponseDataList>(SupportListBody);
