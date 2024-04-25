import pinIcon from '@public/images/pinIcon.png';
import Image from 'next/image';

export type Props = {
  index: string;
  title: string;
  writer: string;
  registrationDate: string;
  isExistedFile: boolean;
  views: number;
  isPinned: boolean;
};

const NoticeListBody = ({ index, title, writer, registrationDate, isExistedFile, views, isPinned }: Props) => {
  const slicedTitle = title.length > 35 ? title.slice(0, 35) + '...' : title;
  return (
    <>
      <tr
        className={`${isPinned ? 'bg-gray-grayscale10' : 'bg-white'} h-38 hover-transition hover:bg-gray-grayscale10 cursor-pointer active:bg-gray-grayscale20 H4-caption text-gray-grayscale50`}
      >
        <td className='text-center'>
          {isPinned ? (
            <div className='flex items-center justify-center'>
              {index} <Image className=' object-contain ml-2 ' src={pinIcon} width={13} height={19.61} alt='pinIcon' />
            </div>
          ) : (
            <> {index}</>
          )}
        </td>
        <td className='text-center'>{slicedTitle}</td>
        <td className='text-center'>{writer}</td>
        <td className='text-center'>{registrationDate}</td>
        <td className='text-center'>{isExistedFile}</td>
        <td className='text-center'>{views}</td>
      </tr>
    </>
  );
};

export default NoticeListBody;
