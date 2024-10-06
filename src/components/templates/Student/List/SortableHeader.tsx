import React from 'react';
import SortIcon from '@/components/atoms/AllBtn/SortBtn/SortBtn';

type SortableHeaderProps = {
  title: string;
  sortBy: string;
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
  isAscending: boolean;
  setIsAscending: React.Dispatch<React.SetStateAction<boolean>>;
  sortKey: string;
};

const SortableHeader: React.FC<SortableHeaderProps> = ({
  title,
  sortBy,
  setSortBy,
  isAscending,
  setIsAscending,
  sortKey,
}) => {
  const handleClick = () => {
    if (sortBy === sortKey) {
      setIsAscending(!isAscending);
    } else {
      setIsAscending(true);
      setSortBy(sortKey);
    }
  };

  return (
    <div
      className={`inline-flex items-center rounded-8 px-15 cursor-pointer ${sortBy === sortKey ? 'bg-blue-blue15' : ''}`}
      onClick={handleClick}
    >
      <h1 className='mr-4 select-none'>{title}</h1>
      <SortIcon
        className={`${sortBy === sortKey && !isAscending ? 'rotate-180' : ''}`}
        width={16}
        height={8}
        fillColor={sortBy === sortKey ? '#3678D8' : '#323232'}
      />
    </div>
  );
};

export default SortableHeader;
