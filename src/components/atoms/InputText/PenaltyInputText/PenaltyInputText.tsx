type Props = {
  placeholder: string;
  input: string;
  setInput: (input: string) => void;
};

const PenaltyInputText = ({ placeholder, input, setInput }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <input
      className={`${input ? 'border-b-gray-grayscale50' : 'border-b-gray-grayscale20'} focus:border-b-gray-grayscale50 w-211 h-32 border-b-1 placeholder:text-gray-grayscale20 focus:outline-none pb-6 text-gray-grayscale50 `}
      placeholder={placeholder}
      type='text'
      value={input}
      onChange={handleChange}
    />
  );
};

export default PenaltyInputText;
