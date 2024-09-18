'use client';
import Image from 'next/image';
import SearchIcon from '@public/images/SearchIcon.png';

type Props = {
  input: string;
  setInput: (id: string) => void;
  placeholder: string;
  handleSearch?: () => void;
};

const SearchTextBox = ({ input, setInput, placeholder, handleSearch }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <div
      className={`${input ? 'border-gray-grayscale50' : 'border-gray-grayscale30'} focus:border-gray-grayscale40 border-[1.5px] w-380 h-38 flex items-center rounded-5`}
    >
      <input
        className={`outline-none H4-cation px-12 w-292 h-24  text-gray-grayscale50 placeholder:text-gray-grayscale30`}
        placeholder={placeholder}
        type='text'
        value={input}
        onChange={handleChange}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSearch && handleSearch();
          }
        }}
      />
      <Image
        src={SearchIcon}
        width={18}
        height={18}
        className='ml-auto mr-9 object-contain'
        alt='SearchIcon'
        onClick={() => handleSearch && handleSearch()}
      />
    </div>
  );
};

export default SearchTextBox;
