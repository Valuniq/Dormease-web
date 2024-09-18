import BuildingTextIcon from '@public/images/BuildingTextIcon.png';
import Image from 'next/image';

type Props = {
  placeholder: string;
  input: string;
  setInput: (input: string) => void;
  handleDormitoryName: () => void;
  readOnly: boolean;
};

const BuildingNameInputText = ({ placeholder, input, setInput, handleDormitoryName, readOnly }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 10) {
      e.target.value = e.target.value.slice(0, 10);
    }
    setInput(e.target.value);
  };

  return (
    <div className='flex items-end'>
      <input
        className={`${input ? 'border-b-gray-grayscale50 ' : 'border-b-gray-grayscale20'} H0 focus:border-b-gray-grayscale50 w-507 h-60 ${!readOnly && 'border-b-1'} placeholder:text-gray-grayscale30 text-center focus:outline-none pb-6 text-gray-grayscale50 `}
        placeholder={placeholder}
        type='text'
        value={input}
        onChange={handleChange}
        onBlur={handleDormitoryName}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleDormitoryName();
          }
        }}
        readOnly={readOnly}
        spellCheck={false}
      />
      {!readOnly && (
        <Image src={BuildingTextIcon} width={25} height={25} className='object-contain mb-5' alt='BuildingTextIcon' />
      )}
    </div>
  );
};

export default BuildingNameInputText;
