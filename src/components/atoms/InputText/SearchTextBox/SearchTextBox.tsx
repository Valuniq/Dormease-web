import Image from 'next/image';
import SearchIcon from '@public/images/SearchIcon.png';

type Props = {
  input: string;
  placeholder: string;
  setInput: (id: string) => void;
  placeholder: string;
};

<<<<<<< HEAD
const SearchTextBox = ({ input, placeholder, setInput }: Props) => {
=======
const SearchTextBox = ({ input, setInput, placeholder }: Props) => {
>>>>>>> afb1824864828df45ec53bfde0e253caf440545e
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
      />
      <Image src={SearchIcon} width={18} height={18} className='ml-auto mr-9 object-contain' alt='SearchIcon' />
    </div>
  );
};

export default SearchTextBox;
