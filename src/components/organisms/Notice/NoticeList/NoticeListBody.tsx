'use client';

import React, { forwardRef, ForwardRefRenderFunction } from 'react';
import { noticeResponseDataList } from '@/types/notice';
import pinIcon from '@public/images/pinIcon.png';
import Image from 'next/image';
import { noticeIdState } from '@/recoil/notice';
import { useRouter } from 'next/navigation';
import { useSetRecoilState } from 'recoil';
import { NoticeDetailRoutes } from '@/constants/navigation';

type Props = noticeResponseDataList;

const NoticeListBody: ForwardRefRenderFunction<HTMLTableRowElement, Props> = (
  { notificationId, pinned, title, writer, createdDate, existFile },
  ref,
) => {
  const router = useRouter();
  const setId = useSetRecoilState(noticeIdState);

  const slicedTitle = title.length > 35 ? title.slice(0, 35) + '...' : title;
  return (
    <tr
      ref={ref}
      className={` ${pinned ? 'bg-gray-grayscale10' : 'bg-white'} h-38 hover-transition hover:bg-gray-grayscale10 cursor-pointer active:bg-gray-grayscale20 H4-caption text-gray-grayscale50`}
      onClick={() => {
        setId(notificationId);
        router.push(NoticeDetailRoutes);
      }}
    >
      <td className='text-center '>
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

export default forwardRef<HTMLTableRowElement, noticeResponseDataList>(NoticeListBody);
