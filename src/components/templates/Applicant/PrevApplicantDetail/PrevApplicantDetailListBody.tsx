'use client';

import React from 'react';

export type Props = {
  name: string;
  studentId: string;
  gender: string;
  applicationBuilding: string;
  residence: string;
  // File은 임시로 null로 해둠
  certifiedFile: null | string;
  prioritySelection: null | string;
  assignedBuilding: string | null;
  isPassed: 'PASS' | 'NON_PASS' | 'MOVE_PASS' | 'WAIT';
};

// 파일 이름을 추출하고 6글자로 제한하는 함수
const getLimitedFileName = (url: string | null) => {
  if (!url || typeof url !== 'string') {
    return null; // url이 null이거나 문자열이 아닌 경우 null 반환
  }
  const fileName = url.substring(url.lastIndexOf('/') + 1);
  const [name, extension] = fileName.split('.');
  return name.length > 6 ? name.substring(0, 6) + '...' + extension : fileName;
};

const PrevApplicationDetailListBody = ({
  name,
  studentId,
  gender,
  applicationBuilding,
  residence,
  certifiedFile,
  prioritySelection,
  assignedBuilding,
  isPassed,
}: Props) => {
  // 각 파일의 이름을 제한된 길이로 표시
  const limitedCertifiedFileName = certifiedFile ? getLimitedFileName(certifiedFile as string) : null;
  const limitedPrioritySelectionFileName = prioritySelection ? getLimitedFileName(prioritySelection as string) : null;
  const statusText =
    isPassed === 'PASS' ? '합격' : isPassed === 'NON_PASS' ? '탈락' : isPassed === 'MOVE_PASS' ? '이동합격' : '-';
  const statusColor = isPassed === 'PASS' ? 'text-blue-blue30' : isPassed === 'NON_PASS' ? 'text-red-red20' : '';
  return (
    <tr className='h-38 hover-transition cursor-pointer hover:bg-gray-grayscale10 active:bg-gray-grayscale20 H4-caption text-gray-grayscale50'>
      <td className='text-center'>{name}</td>
      <td className='text-center'>{studentId}</td>
      <td className='text-center'>{gender}</td>
      <td className='text-center'>{applicationBuilding}</td>
      <td className='text-center flex justify-center'>
        <div className='w-286'>
          <h1
            className=' H4-caption text-gray-grayscale50'
            style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
          >
            {residence}
          </h1>
        </div>
      </td>
      <td className='text-center'>
        {limitedCertifiedFileName ? (
          <a href={certifiedFile as string} target='_blank' rel='noopener noreferrer'>
            {limitedCertifiedFileName}
          </a>
        ) : (
          'X'
        )}
      </td>
      <td className='text-center'>
        {limitedPrioritySelectionFileName ? (
          <a href={prioritySelection as string} target='_blank' rel='noopener noreferrer'>
            {limitedPrioritySelectionFileName}
          </a>
        ) : (
          'X'
        )}
      </td>
      <td className='text-center'>{assignedBuilding && assignedBuilding.length > 0 ? assignedBuilding : '-'}</td>
      <td className={`text-center ${statusColor}`}>{statusText}</td>
    </tr>
  );
};

export default PrevApplicationDetailListBody;
