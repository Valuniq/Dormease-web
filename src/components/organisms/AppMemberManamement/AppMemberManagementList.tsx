// import React, { Fragment } from 'react';
// import AppMemberManagementListBody from './AppMemberManagementListBody';
// import NoneList from '../NoneList/NoneList';
// import { userResponseDataList } from '@/types/userManagement';
// import SortIcon from '@/components/atoms/AllBtn/SortBtn/SortBtn';

// type Props = {
//   appMemberManagementLists: userResponseDataList[];
//   sortConfig: { sortBy: 'bonusPoint' | 'minusPoint' | 'createdDate' | undefined; isAscending: boolean | undefined };
//   setSortConfig: (sortBy: 'bonusPoint' | 'minusPoint' | 'createdDate') => void;
// };

// const AppMemberManagementList = ({ appMemberManagementLists, sortConfig, setSortConfig }: Props) => {
//   const getSortIconClass = (sortBy: 'bonusPoint' | 'minusPoint' | 'createdDate') => {
//     if (sortConfig.sortBy === sortBy) {
//       return sortConfig.isAscending ? 'rotate-0 ' : 'rotate-180';
//     }
//     return '';
//   };

//   const getFillColor = (sortBy: 'bonusPoint' | 'minusPoint' | 'createdDate') => {
//     return sortConfig.sortBy === sortBy ? '#3678D8' : '#323232';
//   };

//   return (
//     <div className='w-fit h-693 overflow-y-scroll overflow-x-visible border-b-1 border-b-gray-grayscale50'>
//       <table className='w-[1305px]'>
//         <thead className=' w-full h-36 bg-white text-gray-grayscale50 sticky top-0 z-1'>
//           <tr className=''>
//             <th className='H4'>번호</th>
//             <th className='H4'>이름</th>
//             <th className='H4'>학번</th>
//             <th className='H4'>휴대전화</th>
//             <th
//               className='h-30 rounded-8  cursor-pointer'
//               onClick={() => setSortConfig('bonusPoint')}
//               style={{ backgroundColor: sortConfig.sortBy === 'bonusPoint' ? '#DAE9FF' : 'transparent' }}
//             >
//               <div className='H4 flex items-center justify-center text-center '>
//                 <h1 className='mr-4'>상점</h1>
//                 <SortIcon
//                   className={`object-contain ${getSortIconClass('bonusPoint')}`}
//                   width={16}
//                   height={8}
//                   fillColor={getFillColor('bonusPoint')}
//                 />
//               </div>
//             </th>
//             <th
//               className='h-30 rounded-8  cursor-pointer'
//               onClick={() => setSortConfig('minusPoint')}
//               style={{ backgroundColor: sortConfig.sortBy === 'minusPoint' ? '#DAE9FF' : 'transparent' }}
//             >
//               <div className='H4 flex items-center justify-center text-center w-full'>
//                 <h1 className='mr-4'>벌점</h1>
//                 <SortIcon
//                   className={`object-contain ${getSortIconClass('minusPoint')}`}
//                   width={16}
//                   height={8}
//                   fillColor={getFillColor('minusPoint')}
//                 />
//               </div>
//             </th>
//             <th
//               className='h-30 rounded-8 cursor-pointer'
//               onClick={() => setSortConfig('createdDate')}
//               style={{ backgroundColor: sortConfig.sortBy === 'createdDate' ? '#DAE9FF' : 'transparent' }}
//             >
//               <div className='H4 flex items-center justify-center text-center w-full'>
//                 <h1 className='mr-4'>생성일자</h1>
//                 <SortIcon
//                   className={`object-contain ${getSortIconClass('createdDate')}`}
//                   width={16}
//                   height={8}
//                   fillColor={getFillColor('createdDate')}
//                 />
//               </div>
//             </th>
//           </tr>
//           <tr>
//             <th colSpan={8}>
//               <div className='w-[1305px] h-18 border-b-1 border-b-gray-grayscale50' />
//             </th>
//           </tr>
//         </thead>

//         {appMemberManagementLists && appMemberManagementLists.length > 0 ? (
//           <tbody className='overflow-y-scroll'>
//             <tr className='h-15' />
//             {appMemberManagementLists.map((i, index) => (
//               <Fragment key={`${i.id}-${index}`}>
//                 <AppMemberManagementListBody
//                   index={index + 1}
//                   id={i.id}
//                   name={i.name}
//                   studentNumber={i.studentNumber}
//                   phoneNumber={i.phoneNumber}
//                   bonusPoint={i.bonusPoint}
//                   minusPoint={i.minusPoint}
//                   createdAt={i.createdAt}
//                 />
//                 <tr className='h-15' />
//               </Fragment>
//             ))}
//           </tbody>
//         ) : (
//           <tbody>
//             <NoneList colspan={7} />
//           </tbody>
//         )}
//       </table>
//     </div>
//   );
// };

// export default AppMemberManagementList;
import React, { Fragment, useRef, useEffect, useCallback } from 'react';
import AppMemberManagementListBody from './AppMemberManagementListBody';
import NoneList from '../NoneList/NoneList';
import { userResponseDataList } from '@/types/userManagement';
import { useInfiniteUser } from '@/apis/AppUserManagement';
import SortIcon from '@/components/atoms/AllBtn/SortBtn/SortBtn';

type Props = {
  sortConfig: { sortBy: 'bonusPoint' | 'minusPoint' | 'createdDate' | undefined; isAscending: boolean | undefined };
  setSortConfig: React.Dispatch<
    React.SetStateAction<{
      sortBy: 'bonusPoint' | 'minusPoint' | 'createdDate' | undefined;
      isAscending: boolean | undefined;
    }>
  >;
};

const AppMemberManagementList = ({ sortConfig, setSortConfig }: Props) => {
  const { userData, isLoadingMore, size, setSize, isReachingEnd } = useInfiniteUser();

  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadMoreRef = useRef<HTMLDivElement>(null);

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const target = entries[0];
      if (target.isIntersecting && !isLoadingMore && !isReachingEnd) {
        setSize((prevSize: number) => prevSize + 1);
      }
    },
    [isLoadingMore, isReachingEnd, setSize],
  );

  useEffect(() => {
    if (observerRef.current) observerRef.current.disconnect();
    observerRef.current = new IntersectionObserver(handleObserver);
    if (loadMoreRef.current) observerRef.current.observe(loadMoreRef.current);
  }, [handleObserver]);

  const getSortIconClass = (sortBy: 'bonusPoint' | 'minusPoint' | 'createdDate') => {
    if (sortConfig.sortBy === sortBy) {
      return sortConfig.isAscending ? 'rotate-0 ' : 'rotate-180';
    }
    return '';
  };

  const getFillColor = (sortBy: 'bonusPoint' | 'minusPoint' | 'createdDate') => {
    return sortConfig.sortBy === sortBy ? '#3678D8' : '#323232';
  };

  const handleSort = (sortBy: 'bonusPoint' | 'minusPoint' | 'createdDate') => {
    setSortConfig((prevConfig) => {
      if (prevConfig.sortBy === sortBy) {
        if (prevConfig.isAscending === undefined) {
          return { sortBy, isAscending: true };
        } else if (prevConfig.isAscending === true) {
          return { sortBy, isAscending: false };
        } else {
          return { sortBy: undefined, isAscending: undefined };
        }
      } else {
        return { sortBy, isAscending: true };
      }
    });
  };

  return (
    <div className='w-fit h-693 overflow-y-scroll overflow-x-visible border-b-1 border-b-gray-grayscale50'>
      <table className='w-[1305px]'>
        <thead className=' w-full h-36 bg-white text-gray-grayscale50 sticky top-0 z-1'>
          <tr className=''>
            <th className='H4'>번호</th>
            <th className='H4'>이름</th>
            <th className='H4'>학번</th>
            <th className='H4'>휴대전화</th>
            <th
              className='h-30 rounded-8 cursor-pointer'
              onClick={() => handleSort('bonusPoint')}
              style={{ backgroundColor: sortConfig.sortBy === 'bonusPoint' ? '#DAE9FF' : 'transparent' }}
            >
              <div className='H4 flex items-center justify-center text-center '>
                <h1 className='mr-4'>상점</h1>
                <SortIcon
                  className={`object-contain ${getSortIconClass('bonusPoint')}`}
                  width={16}
                  height={8}
                  fillColor={getFillColor('bonusPoint')}
                />
              </div>
            </th>
            <th
              className='h-30 rounded-8 cursor-pointer'
              onClick={() => handleSort('minusPoint')}
              style={{ backgroundColor: sortConfig.sortBy === 'minusPoint' ? '#DAE9FF' : 'transparent' }}
            >
              <div className='H4 flex items-center justify-center text-center w-full'>
                <h1 className='mr-4'>벌점</h1>
                <SortIcon
                  className={`object-contain ${getSortIconClass('minusPoint')}`}
                  width={16}
                  height={8}
                  fillColor={getFillColor('minusPoint')}
                />
              </div>
            </th>
            <th
              className='h-30 rounded-8 cursor-pointer'
              onClick={() => handleSort('createdDate')}
              style={{ backgroundColor: sortConfig.sortBy === 'createdDate' ? '#DAE9FF' : 'transparent' }}
            >
              <div className='H4 flex items-center justify-center text-center w-full'>
                <h1 className='mr-4'>생성일자</h1>
                <SortIcon
                  className={`object-contain ${getSortIconClass('createdDate')}`}
                  width={16}
                  height={8}
                  fillColor={getFillColor('createdDate')}
                />
              </div>
            </th>
          </tr>
          <tr>
            <th colSpan={8}>
              <div className='w-[1305px] h-18 border-b-1 border-b-gray-grayscale50' />
            </th>
          </tr>
        </thead>

        {userData && userData.length > 0 ? (
          <tbody className='overflow-y-scroll'>
            <tr className='h-15' />
            {userData.map((i, index) => (
              <Fragment key={`${i.id}-${index}`}>
                <AppMemberManagementListBody
                  index={index + 1}
                  id={i.id}
                  name={i.name}
                  studentNumber={i.studentNumber}
                  phoneNumber={i.phoneNumber}
                  bonusPoint={i.bonusPoint}
                  minusPoint={i.minusPoint}
                  createdAt={i.createdAt}
                />
                <tr className='h-15' />
              </Fragment>
            ))}
          </tbody>
        ) : (
          <tbody>
            <NoneList colspan={7} />
          </tbody>
        )}
      </table>
      <div ref={loadMoreRef} className='flex justify-center mt-4'>
        {isLoadingMore && <span>Loading...</span>}
        {isReachingEnd && <span>No more data</span>}
      </div>
    </div>
  );
};

export default AppMemberManagementList;
