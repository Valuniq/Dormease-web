import BuildingTextIcon from '@public/images/BuildingTextIcon.png';
import Image from 'next/image';

type Props = {
  placeholder: string;
  input: string;
  setInput: (input: string) => void;
};

const BuildingNameInputText = ({ placeholder, input, setInput }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <div className='flex items-end'>
      <input
        className={`${input ? 'border-b-gray-grayscale50 ' : 'border-b-gray-grayscale20'} H0 focus:border-b-gray-grayscale50 w-507 h-60 border-b-1 placeholder:text-gray-grayscale30 text-center focus:outline-none pb-6 text-gray-grayscale50 `}
        placeholder={placeholder}
        type='text'
        value={input}
        onChange={handleChange}
      />
      <Image src={BuildingTextIcon} width={25} height={25} className='object-contain mb-5' alt='BuildingTextIcon' />
    </div>
  );
};

export default BuildingNameInputText;
