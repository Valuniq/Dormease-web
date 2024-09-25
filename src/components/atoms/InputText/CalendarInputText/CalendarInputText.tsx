import { CALENDAR } from '@/constants/restrictions';

type Props = {
  input: string;
  setInput: (id: string) => void;
  placeholder: string;
};

const CalendarInputText = ({ input, setInput, placeholder }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <input
      className={`${input ? 'border-b-gray-grayscale50' : 'border-b-gray-grayscale20'} H0 border-b-3 outline-none focus:border-b-gray-grayscale50 px-2 w-911 h-68  text-gray-grayscale50 placeholder:text-gray-grayscale30`}
      type='text'
      value={input}
      placeholder={placeholder}
      onChange={handleChange}
      minLength={1}
      maxLength={CALENDAR.title.maxLength}
    />
  );
};

export default CalendarInputText;
